const Client = require('../../models/mongoose-models/Client')

const createClientFriendList = async (req, res) => {
  try {
    const { id } = req.params
    const { fullName, email } = await Client.findById(id)
    const friends = req.body

    const createFriendList = { fullName, email, friends }
    await Client.findByIdAndUpdate(id, {
      $set: createFriendList
    }, { new: true })
    return await res.status(200).send('Success')

  }
  catch (err) {
    return res.status(500).send('Error')
  }
}

module.exports = createClientFriendList