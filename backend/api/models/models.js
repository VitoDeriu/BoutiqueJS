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
}

module.exports = ModelsTest;