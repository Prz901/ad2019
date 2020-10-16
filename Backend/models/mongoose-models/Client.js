const mongoose = require('mongoose')

module.exports = mongoose.model('Client', {
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  friends: {
    type: Array,
    required: true,
  },
})