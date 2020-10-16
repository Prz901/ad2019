// Express imports
const express = require('express'),
  router = express.Router()

// Controller import
const getClient = require('./getClient')
const createClient = require('./createClient')
const updateClient = require('./updateClient')
const deleteClient = require('./deleteClient')
const makeClientEmail = require('./makeEmailClient')

const cleanClientFriend = require('./cleanClientFriend')
const createClientFriendList = require('./createClientFrindList')


// Crud de Client caso nao queira mudar a lista de amigos
router.get('/', getClient.getAll)
router.get('/:id', getClient.getClientById)
router.post('/create', createClient)
router.patch('/:id', updateClient)
router.delete('/:id', deleteClient)
router.post('/make/:id', makeClientEmail)


//Clean Friend array
router.patch('/:id/clean', cleanClientFriend)

//Add news Friends in array
router.post("/:id/createfriends", createClientFriendList)



module.exports = router