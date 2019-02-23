const db = require('../sql')

class Model {
    query (query) {
        return new Promise((resolve, reject) => {
            db.query(query, (error, response) => {
                if (error) {
                    return reject(error)
                }
                return resolve(response)
            })
        })
    }
    multipleQueries (queries) {
        if ( ! queries) return Promise.reject('Invalid type queries')

        return Promise.all(queries)
    }
}

module.exports = Model