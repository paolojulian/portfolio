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
        return super.getByID(
            db,
            this.table.music,
            this.id,
            fields
        );
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

    deleteMusic (db) {
        
        // Require File System Module for deletion of data
        const fs = require('fs');
        const deleteFromDB = () => super.deleteByID(db, this.table.music, this.id);
        const deleteFile = (audio_path) => {
            return new Promise((resolve, reject) => {
                fs.unlink(`src/assets/audio/${audio_path}`, (err) => {
                    if (err) return reject(err);

                    return resolve();
                });
            });
        };

        return new Promise((resolve, reject) => {
            db.beginTransaction(async err => {
                try {
                    if (err) { throw err }
                    const audioPath = await this.getByID(db, 'audio_path')
                        .then(response => response.audio_path)

                    const a = deleteFromDB()
                    const b = deleteFile(audioPath)

                    await Promise.all([a, b]).catch(err => { throw err })
                    await db.commit(err => { throw err })
                    return resolve()
                } catch (err) {
                    await db.rollback(err => { reject(err) })
                    return reject(err)
                }
            })
        })
    }
}

module.exports = {
    Music
};