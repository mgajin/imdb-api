require('colors')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./db')
const app = require('./app')

dotenv.config({ path: path.join(__dirname, './config/config.env') })

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`.yellow.bold)
})
