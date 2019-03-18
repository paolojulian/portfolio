class Model {
    query (query) {
        return new Promise((resolve, reject) => {
            this.db.query(query, (error, response) => {
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
    /**
     * GET A ROW BY ID
     * @param { String } table 
     * @param { Number } id - PRIMARY KEY
     * @param { String } fields - Fields to get
     * @return { Promise }
     */
    getByID (db, table, id, fields = "*") {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT ${fields}
                FROM ${TABLE}
                WHERE id = ${id}
            `
            db.query(sql, (error) => {
                console.log(error, response)
                if (error) return reject(error);

                return resolve(response)
            })
        })
    }
    /**
     * INSERT QUERY MYSQL
     * @param { String } table 
     * @param { Object } form - form to insert, key should match table columns, value will be the one to be inserted
     * @param { Object } db - db from express
     * @return { Promise }
     */
    insert (table, form, db) {
        let keys = []
        let values = []
        for (let key in form) {
            if ( ! form.hasOwnProperty(key)) continue;

            keys.push(key)
            values.push(form[key])
        }
        let columnNames = '(' + keys.join(', ') + ')'

        let insertValues = `VALUES ('${values.join("','")}')`

        let sql = `INSERT INTO ${table} ${columnNames} ${insertValues}`
        console.log(sql)
        return new Promise((resolve, reject) => {
            db.query(sql, (error) => {
                console.log(error)
                if (error) return reject(error)

                return resolve()
            })
        })
    }

    insertID (db) {
        let sql = 'SELECT LAST_INSERT_ID()'
        db.query(sql, (error, lastID) => {
            if (error) throw error;
            return lastID
        })
    }

    delete (db, table, id) {
        let sql = `DELETE FROM ${table} WHERE id = ${id}`
        return new Promise((resolve, reject) => {
            db.query(sql, (error, lastID) => {
                if (error) return reject(error)

                return resolve()
            })
        })
    }
}

module.exports = Model