class Model {
    constructor (db) {
        this.db = db
    }

    transaction (func) {
        return new Promise((resolve, reject) => {
            this.beginTransaction(async err => {
                try {
                    if (err) return reject(err)
                    func()
                    await this.commitTransaction()
                    resolve()
                } catch (err) {
                    await this.rollbackTransaction()
                    reject(err)
                }
            })
        })
    }

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

    getQuery (table, fields = '*', where = []) {
        let sql = `
            SELECT ${fields}
            FROM ${table}
        `
        if (where) {
            sql += this.where(where)
        }
        return this.query(sql)
    }
    /**
     * GET A ROW BY ID
     * @param { String } table 
     * @param { Number } id - PRIMARY KEY
     * @param { String } fields - Fields to get
     * @return { Promise }
     */
    getByID (table, id, fields = "*") {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT ${fields}
                FROM ${table}
                WHERE id = ${id}
            `

            // eslint-disable-next-line
            console.log(sql)
            this.db.query(sql, (error, response) => {
                // eslint-disable-next-line
                if (error) return reject(error);
                if ( ! response[0]) return reject('No Data')

                return resolve(response[0])
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
    insert (table, form) {
        let keys = []
        let values = []
        for (let key in form) {
            if ( ! form.hasOwnProperty(key)) continue;

            keys.push(key)
            values.push(form[key])
        }
        let columnNames = `(\`${keys.join('`, `')}\`)`

        let insertValues = `VALUES ('${values.join("','")}')`

        let sql = `INSERT INTO ${table} ${columnNames} ${insertValues}`
        // eslint-disable-next-line
        console.log(sql)
        return new Promise((resolve, reject) => {
            this.db.query(sql, (error) => {
                // eslint-disable-next-line
                console.log(error)
                if (error) return reject(error)

                return resolve()
            })
        })
    }

    /** INSERT BATCH MYSQL
     * @param { String } table - TABLE NAME
     * @param { Array } columnNames - column names to be inserted
     * @param { Array } data - datas to be inserted, usually array of arrays
     */
    insertBatch (table, columnNames, insertValues) {
        columnNames = '(`' + columnNames.join('`, `') + '`)'
        insertValues = insertValues.map(value => `('${value.join("', '")}')`).join(',')
        let sql = `INSERT INTO ${table} ${columnNames} VALUES ${insertValues}`
        // eslint-disable-next-line
        console.log(sql)
        return new Promise((resolve, reject) => {
            this.db.query(sql, err => {
                // eslint-disable-next-line
                console.log(err)
                if (err) return reject(err);

                resolve()
            })
        })
    }
    /**
     * GETS THE LAST INSERTED ID
     */
    insertID () {
        let sql = 'SELECT LAST_INSERT_ID() as insertID'
        return new Promise((resolve, reject) => {
            this.db.query(sql, (error, res) => {
                if (error) return reject(error);
                if ( ! res[0]) return reject('No Data')

                return resolve(res[0].insertID)
            })
        })
    }

    /**
     * Edit of row via PRIMARY KEY(id)
     * @param { String } table - tablename of data to be edited
     * @param { Number } id - primary key
     * @param { Object } data - key as column_name, value as new value
     */
    update (table, id, data, where = []) {
        return new Promise((resolve, reject) => {
                let sql = `
                    UPDATE ${table}
                    SET ${Object.keys(data).map((key) => {
                        return `${key} = '${data[key]}'`
                    }).join(', ')}
                    WHERE id = ${id}
                `
                if (where) {
                    sql += this.where(where)
                }
                // eslint-disable-next-line
                console.log(sql)

                this.db.query(sql, (error) => {
                    if (error) return reject(error);

                    return resolve()
                })
        })
    }

    /**
     * Deletion of data by PRIMARY KEY(id)
     */
    deleteByID (table, id) {
        let sql = `DELETE FROM ${table} WHERE id = ${id}`
        return new Promise((resolve, reject) => {
            this.db.query(sql, (error) => {
                if (error) return reject(error)

                return resolve()
            })
        })
    }

    /**
     * Where condition parameter
     * @param { Object } data - key as column_name, and value as value of column
     * @return { String }
     */
    where (data) {
        if ( ! data) return '';
        return data
            .map((value, index) => {
                return `${index} = ${value}`
            }).join(' AND ')
    }

    beginTransaction (func) {
        return this.db.beginTransaction(func())
    }

    commitTransaction () {
        return this.db.commit()
    }

    rollbackTransaction () {
        return this.db.rollback()
    }
}

module.exports = Model