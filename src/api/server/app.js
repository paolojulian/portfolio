const express = require('express')
const connection = require('./sql')
const bodyParser = require('body-parser')
const app = express()

/** ROUTES */
// const hobbyRoutes = require('./routes/hobbies')
const cookingRoutes = require('./routes/cooking.route.js')
const musicRoutes = require('./routes/music.route.js')
const codingRoutes = require('./routes/coding.route.js')

app.use(connection)
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
})); 
// app.use((req, res, next) => {
//     req.db = connection
//     next()
// })

app.use('/', [
    cookingRoutes,
    musicRoutes,
    codingRoutes
])

module.exports = app
