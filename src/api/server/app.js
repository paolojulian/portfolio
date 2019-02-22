const express = require('express')
const app = express()

const hobbyRoutes = require('./routes/hobbies')

app.use('/api', hobbyRoutes)

module.exports = app
