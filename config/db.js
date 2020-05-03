const mongoose = require('mongoose')
const config = require('config')
const URI = config.get('mongoURI')

const connectDB = async () => {
   try {
      await mongoose.connect(URI, {
         useCreateIndex: true,
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useFindAndModify: true,
      })
      console.log('Successfully connect to MongoDB')
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

module.exports = connectDB
