const Model = require('./model')

class Music extends Model{
    constructor (db) {
        super (db)

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

    getByID (fields) {
        return super.getByID(
            this.table.music,
            this.id,
            fields
        );
    }

    getMusicList (fields = '*') {
        let query = `SELECT ${fields} FROM music_music`
        return super.query(query)
    }

    addMusic () {
        let music = {
            name: this.name,
            artist: this.artist,
            audio_path: this.file.filename,
            genre_id: 4
        }

        return super.insert(this.table.music, music)
    }

    validateEmpty () {
        if (this.name.length <= 0) return false;
        if (this.artist.length <= 0) return false;
        if ( ! this.file) return false;

        return true;
    }

    updateMusic (data) {
        return new Promise((resolve, reject) => {
            this.beginTransaction(async err => {
                try {
                    if (err) return reject(err);
                    const updateDB = this.update(this.table.music, this.id, data)

                    await Promise.all([updateDB]).catch(err => { throw err })
                    await this.commitTransaction()
                    resolve()
                } catch (err) {
                    await this.rollbackTransaction()
                    reject(err)
                }
            })
        })
    }

    deleteMusic () {
        // Require File System Module for deletion of data
        const fs = require('fs');
        const resolveSrc = require('../../../../aliases.config')
        const deleteFromDB = () => super.deleteByID(this.table.music, this.id);
        const deleteFile = (audio_path) => {
            return new Promise((resolve, reject) => {
                audio_path = resolveSrc(`src/assets/audio/${audio_path}`)
                fs.unlink(audio_path, (err) => {
                    if (err) return reject(err);

                    return resolve();
                });
            });
        };

        return new Promise((resolve, reject) => {
            this.beginTransaction(async err => {
                try {
                    if (err) { throw err }
                    const audioPath = await this.getByID('audio_path')
                        .then(response => response.audio_path)
                        .catch(err => { throw err })

                    const promises = [
                        deleteFromDB(),
                        deleteFile(audioPath)
                    ]

                    await Promise.all(promises).catch(err => { throw err })
                    await this.commitTransaction()
                    return resolve()
                } catch (err) {
                    await this.rollbackTransaction()
                    return reject(err)
                }
            })
        })
    }
}

module.exports = {
    Music
};