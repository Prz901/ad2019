const Client = require('../../models/mongoose-models/Client')

const cleanClientFriend = async (req, res) => {
  try {
    const { id } = req.params
    const { fullName, email } = await Client.findById(id)
    const friends = [{}]

    const updateClient = { fullName, email, friends }

    await Client.findByIdAndUpdate(id, {
      $set: updateClient
    }, { new: true })
    return await res.status(200).send('Success')
  }
  catch (err) {
    return res.status(500).send('Error')
  }
}

module.exports = cleanClientFriend

