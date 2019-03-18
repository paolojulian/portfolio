const Model = require('./model')

class Music extends Model{
    constructor (name, artist, file) {
        super ()
        this.name = name.trim()
        this.artist = artist.trim()
        this.file = file

        this.table = {}
        this.table.music = 'music_music'
    }
    getMusicList () {
        let query = "SELECT * FROM music_music"
        return super.query(query)
    }

    addMusic (db) {
    	let music = {
    		name: this.name,
    		artist: this.artist,
    		audio_path: this.file.filename,
    		genre_id: 4
    	}

    	return super.insert(this.table.music, music, db)
    }

    validateEmpty () {
    	if (this.name.length <= 0) return false;
    	if (this.artist.length <= 0) return false;
    	if ( ! this.file) return false;

    	return true;
    }
}

module.exports = {
	Music
}