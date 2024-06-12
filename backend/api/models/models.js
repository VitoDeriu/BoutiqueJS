const sql = require('../config/bd');

class ModelsTest {
    static GetArmes() {
        return new Promise ((resolve, reject) => {
            const sqlRequest = 'SELECT * FROM armes';
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data)
            })
        })
    }

    static GetArmeId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM armes WHERE armes.id_arme = ?', [id]);
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (data.length) {
                    resolve(data);
                    return;
                }
                reject ('No data found');
            })
        })
    }

    static GetSkin() {
        return new Promise ((resolve, reject) => {
            const sqlRequest = 'SELECT * FROM skins';
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data)
            })
        })
    }

    static GetSkinId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM skins WHERE skins.id_skin = ?', [id]);
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (data.length) {
                    resolve(data);
                    return;
                }
                reject ('No data found');
            })
        })
    }

    static GetImage() {
        return new Promise ((resolve, reject) => {
            const sqlRequest = 'SELECT * FROM images';
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data)
            })
        })
    }

    static GetImageId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM images WHERE images.id_image = ?', [id]);
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (data.length) {
                    resolve(data);
                    return;
                }
                reject ('No data found');
            })
        })
    }
}

module.exports = ModelsTest;