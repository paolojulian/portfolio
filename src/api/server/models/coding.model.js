const Model = require('./model')

class CodingModel extends Model{
    constructor () {
        super ()
    }

    createTables () {
        let qCompanyProjects = `
            CREATE TABLE IF NOT EXISTS company_projects(
                id int unsigned auto_increment,
                name varchar(30) not null,
                description text not null,
                tool varchar(30) not null,
                imageName varchar(50) not null,
                existing tinyint(1) not null,
                date_created datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                date_modified datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY(id)
            )
        `
        let companyProjects = super.query(qCompanyProjects)
        return super.multipleQueries([
            
        ])
        // query = 'CREATE TArLE personal_projects'
        // super.query(query)
        // query = 'CREATE TABLE coding_frameworks'
        // super.query(query)
        // query = 'CREATE TABLE coding_languages'
        // super.query(query)
    }

    getMusicList () {
        let query = "SELECT * FROM music_music"
        return super.query(query)
    }
}

module.exports = new CodingModel()