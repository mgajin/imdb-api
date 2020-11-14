require('colors')
const mongoose = require('mongoose')

const connection = async function connectToDatabase() {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })

    console.log(
        `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    )
}

module.exports = connection
