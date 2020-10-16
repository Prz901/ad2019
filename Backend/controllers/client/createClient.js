const Client = require('../../models/mongoose-models/Client')

const createClient = async (req, res) => {
  try {
    const client = new Client(req.body)
    await client.save()
    res.status(201).send(client)
  }
  catch (err) {
    return res.status(500).send('Error' + err)
  }
}

module.exports = createClient