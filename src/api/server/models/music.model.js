const Model = require('./model')

class CookingModel extends Model{
    constructor () {
        super ()
    }
    getMusicList () {
        let query = "SELECT * FROM music_music"
        return super.query(query)
    }
}

module.exports = new CookingModel()