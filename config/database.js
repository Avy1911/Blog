const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log('bhai badiya se db connect ho gaya'))
        .catch((error) => {
            console.log("DB mai pareshani ho rhi h")
            console.log(error)
            process.exit(1)
        })
}

module.exports = dbConnect