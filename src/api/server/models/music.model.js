const Model = require('./model')

class Music extends Model{
    constructor () {
        super ()

        this.table = {}
        this.table.music = 'music_music'
    }

    setID (id) {
        this.id = id
    }

    setMusic (name, artist, file) {
        this.name = name.trim()
        this.artist = artist.trim()
        this.file = file
    }

    getByID (db, fields) {
        super.getbyID(
            db,
            this.table.music,
            this.id,
            fields
        )
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

    delete (db) {
        // Require File System Module for deletion of data
        const fs = require('fs')
        const deleteMusic = () => super.delete(db, this.table.music, this.id)
        return new Promise((resolve, reject) => {
            this.getByID(db)
            .then(music => {
                fs.unlink(`src/assets/audio/${music.audio_path}`,   (err) => {
                    if (err) {
                        return reject(err)
                    }
                    return deleteMusic()
                        .then(() => resolve())
                        .catch(error => reject(error))
                })
            })
            .catch(error => reject(error))
        })
    }
}

module.exports = {
	Music
}