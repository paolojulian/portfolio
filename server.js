const port = process.env.PORT || 5000;
const http = require('http')
const app = require('./src/api/server/app')
const server = http.createServer(app)
// const express = require('express')
// const app = express()
app.use((req, res) => {
    fs.readFile('index.htm', 'utf-8', (err, content) => {
        if (err) {
            console.log('We cannot open "index.htm" file.')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(content)
    })
})

server.listen(port, () => {
    console.log('server started '+ port);
});