//mysql://ba30a4bf0efd95:621f9c8c@us-cdbr-iron-east-03.cleardb.net/heroku_d9838c7ffb34abb?reconnect=true
const mysql = require('mysql')

/** MYSQL */
// Connection
const db = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'ba30a4bf0efd95',
    password: '621f9c8c',
    database: 'heroku_d9838c7ffb34abb'
});
// Connect DB
db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('my sql connected successfully')
    }
})

module.exports = db
