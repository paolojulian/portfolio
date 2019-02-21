const express = require('express')
const app = express()

const hobbyRoutes = require('./routes/hobbies')

app.use('/hobby', hobbyRoutes)

module.exports = app
