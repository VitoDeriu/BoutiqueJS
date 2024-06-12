const sql = require('../config/bd');

class ModelsTest {
    static GetArmes() {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM armes');
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

    static GetArmeId(id) {
        return new Promise ((resolve, reject) => {
            let sqlRequest = sql.format('SELECT * FROM armes WHERE id = ?', [id]);
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