const express = require('express')
const serveStatic = require('serve-static');
const app = express()
const fs = require('fs')

/** ROUTES */
// const hobbyRoutes = require('./routes/hobbies')
const cookingRoutes = require('./routes/cooking.route.js')
const musicRoutes = require('./routes/music.route.js')
const codingRoutes = require('./routes/coding.route.js')

app.use(serveStatic(__dirname + "/dist"));
app.use('/', [
    cookingRoutes,
    musicRoutes,
    codingRoutes
])

module.exports = app
