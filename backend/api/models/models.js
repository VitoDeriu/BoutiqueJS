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
                if (data.length === 1) {
                    resolve(data[0]);
                    return;
                }
                if (data.lenght){
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
                if (data.length === 1) {
                    resolve(data[0]);
                    return;
                }
                if (data.lenght) {
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
            let sqlRequest = sql.format('SELECT * FROM images WHERE images.id_skin = ?', [id]);
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

    static GetBaseImageId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM images WHERE images.id_skin = ?', [id]);
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (data.length) {
                    resolve(data[0]);
                    return;
                }
                reject ('No data found');
            })
        })
    }

    static GetIconeId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format(
                'SELECT path, alt FROM skins s JOIN variantes v ON s.id_variante = v.id_variante JOIN icones i ON v.id_icone = i.id_icone WHERE s.id_skin = ?', [id]);
            

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

    static GetVariante() {
        return new Promise ((resolve, reject) => {
            const sqlRequest = 'SELECT * FROM variantes';
            sql.query(sqlRequest, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data)
            })
        })
    }

    static GetVarianteId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM variantes WHERE variantes.id_variante = ?', [id]);
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

    static GetArmesTypeId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM armes WHERE armes.id_type = ?', [id]);
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

    static GetSkinIdByArmeId(idArme) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM armes_skins WHERE armes_skins.id_arme = ?', [idArme]);
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