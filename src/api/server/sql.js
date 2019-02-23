const mysql = require('mysql')

/** MYSQL */
// Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
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
