const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, },
  (err) => {
    if (err) {
      console.log('[ERROR] Mongoose ERROR')
      throw err
    }
    console.log('[INFO] Mongoose Started')
  })
