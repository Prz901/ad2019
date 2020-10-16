const Client = require('../../models/mongoose-models/Client')

const getAll = async (req, res) => {
  try {
    const client = await Client.find({})
    if (client.length > 0) {
      res.status(200).send(client)
    }
    else {
      res.status(404).send('No clients Found')
    }
  }
  catch (err) {
    return res.status(500).send('Error')
  }
}

const getClientById = async (req, res) => {
  try {
    const { id } = req.params
    const client = await Client.findById(id)
    if (client) {
      res.status(200).send(client)
    }
    else {
      res.status(404).send('Client Not Found')
    }
  }
  catch (err) {
    return res.status(500).send('Error')
  }
}

module.exports.getAll = getAll
module.exports.getClientById = getClientById