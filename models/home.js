const db = require('../config/db');

const Home = {
    getAll: callback => {
        db.query('SELECT * FROM homecont', callback);
    },
    create: (imagePath, callback) => {
        db.query('INSERT INTO homecont (image) VALUES (?)', [ imagePath], callback);
    },
    update: (id, imagePath, callback) => {
        db.query('UPDATE homecont SET image = ? WHERE id = ?', [ imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM homecont WHERE id = ?', [id], callback);
    }
};

module.exports = Home;
