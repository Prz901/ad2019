const Client = require('../../models/mongoose-models/Client')
const mailjet = require('node-mailjet')
  .connect('fb58ae762869988defd6fa54a15d8014', '8d3e8f229d608bf224ea0dcedc4cb720')

const makeEmail = async (req, res) => {

  const { id } = req.params
  const client = await Client.findById(id)
  let email = [{ fullname: client.fullName, email: client.email }]

  const emailsAux = client.friends

  emailsAux.forEach(element => {
    email.push(element)
  });

  let sends = email

  let acumulator = email.length

  while (acumulator > 0) {
    const luck = Math.floor(Math.random() * email.length)
    const luck1 = Math.floor(Math.random() * email.length)

    const request = mailjet
      .post("send", { 'version': 'v3.1' })
      .request({
        "Messages": [
          {
            "From": {
              "Email": email[luck].email,
              "Name": email[luck].fullname
            },
            "To": [
              {
                "Email": sends[luck1].email,
                "Name": sends[luck1].fullname
              }
            ],
            "Subject": "Greetings from Mailjet.",
            "TextPart": "My first Mailjet email",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            "CustomID": "AppGettingStartedTest"
          }
        ]
      })
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })

    let filteredEmails = email.filter((element) => {
      return element != email[luck]
    })
    let filteredSends = sends.filter((element) => {
      return element != sends[luck1]
    })

    email = filteredEmails
    sends = filteredSends

    acumulator--

  }

}

module.exports = makeEmail
