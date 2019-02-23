var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;

/*HTTP SERVER*/
const http = require('http')
const app = require('./src/api/server/app')
const server = http.createServer(app)
const serverPort = 3000;
server.listen(serverPort, () => {
    console.log('server started ' + serverPort)
})
app.use(serveStatic(__dirname + "/dist"));
app.listen(port, () => {
    console.log('server started '+ port);
});