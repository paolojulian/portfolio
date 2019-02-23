const express = require('express')
const app = express()

/** ROUTES */
// const hobbyRoutes = require('./routes/hobbies')
const cookingRoutes = require('./routes/cooking.route.js')
const musicRoutes = require('./routes/music.route.js')
const codingRoutes = require('./routes/coding.route.js')

app.use('/', [
    cookingRoutes,
    musicRoutes,
    codingRoutes
])

module.exports = app
