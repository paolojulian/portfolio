const serveStatic = require('serve-static');
const http = require('http')
const express = require('express')
const app = express()
// const app = require('./src/api/server/app')
const port = process.env.PORT || 5000;
const fs = require('fs');
// const server = http.createServer(app);
const fileLocation = __dirname + "/dist";

app.use(serveStatic(fileLocation));
app.use((req, res) => {
    fs.readFile(fileLocation + '/index.html', 'utf-8', (err, content) => {
        if (err) {
            console.log('We cannot open "index.html" file.')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(content)
    })
})

app.listen(port, () => {
    console.log('server started '+ port);
});
// server.listen(port, () => {
//     console.log('server started '+ port);
// });