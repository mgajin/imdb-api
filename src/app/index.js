require('module-alias/register')
const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')

dotenv.config({ path: path.join(__dirname, '@config/config.env') })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', require('@api/routes'))

module.exports = app
