const express = require('express')
const connection = require('./sql')
const bodyParser = require('body-parser')
const app = express()
const responses = require('./responses')

/** ROUTES */
// const hobbyRoutes = require('./routes/hobbies')
const cookingRoutes = require('./routes/cooking.route.js')
const musicRoutes = require('./routes/music.route.js')
const codingRoutes = require('./routes/coding.route.js')
const uploadRoutes = require('./routes/uploads.route')

app.use(responses)
app.use(connection)
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
})); 

app.use('/api', [
    cookingRoutes,
    musicRoutes,
    codingRoutes,
    uploadRoutes
])

module.exports = app
