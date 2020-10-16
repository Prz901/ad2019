const express = require('express'),
  router = express.Router()

const client = require('./client/clientHandler')

// Middlewares for entire routes
// const logMiddleware = require('../middlewares/logger')

// Routes in use
router.use('/client', client)

// 404 setup
router.use('*', (req, res) => {
  res.status(404).send('Page Not Found')
})

module.exports = router