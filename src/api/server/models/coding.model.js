const Model = require('./model')

class CodingModel extends Model{
    constructor () {
        super ()
    }

    createTables () {
        let projects = `
            CREATE TABLE IF NOT EXISTS coding_projects(
                id int unsigned auto_increment,
                name varchar(30) not null,
                description text not null,
                tool varchar(30) not null,
                imageName varchar(50) not null,
                existing tinyint(1) not null,
                projectType tinyint(1) not null,
                dateCreated datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                dateModified datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY(id)
            )
        `
        let coding = `
            CREATE TABLE IF NOT EXISTS coding(
                id int unsigned auto_increment,
                name varchar(30) not null,
                percent tinyint(2) not null,
                theme varchar(50) not null,
                codingType tinyint(1) not null,
                dateCreated datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                dateModified datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY(id)
            )
        `
        return super.multipleQueries([
            super.query(projects),
            super.query(coding),
        ])
    }

    getLanguages () {
        let query = "SELECT * FROM coding WHERE codingType = 1"
        return super.query(query)
    }

    getFrameworks () {
        let query = "SELECT * FROM coding WHERE codingType = 2"
        return super.query(query)
    }

    getCompanyProjects () {
        let query = "SELECT * FROM coding_projects WHERE projectType = 1"
        return super.query(query)
    }

    getPersonalProjects () {
        let query = "SELECT * FROM coding_projects WHERE projectType = 2"
        return super.query(query)
    }

    getMusicList () {
        let query = "SELECT * FROM music_music"
        return super.query(query)
    }
}

module.exports = new CodingModel()