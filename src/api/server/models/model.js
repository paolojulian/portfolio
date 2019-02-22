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
        if (typeof queries !== 'Array') return Promise.reject()

        return new Promise.all(queries)
    }
}

module.exports = Model