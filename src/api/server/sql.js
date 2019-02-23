//mysql://ba30a4bf0efd95:621f9c8c@us-cdbr-iron-east-03.cleardb.net/heroku_d9838c7ffb34abb?reconnect=true
const mysql = require('mysql')

/** MYSQL */
// Connection
// const db = {
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'ba30a4bf0efd95',
//     password: '621f9c8c',
//     database: 'heroku_d9838c7ffb34abb'
// };
const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
};
// Connect DB
var connection;

function handleDisconnect() {
    connection = mysql.createConnection(db); // Recreate the connection, since
                                                    // the old one cannot be reused.

    connection.connect((err) => {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        } else {
            console.log('MYSQL Connected')
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', (err) => {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        }                                     // connnection idle timeout (the wait_timeout
    });
}

handleDisconnect();
// db.connect((err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('my sql connected successfully')
//     }
// })

module.exports = connection
