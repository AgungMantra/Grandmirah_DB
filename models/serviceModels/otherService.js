const db = require('../../config/db');

const OtherService = {
    getAll: callback => {
        db.query('SELECT * FROM otherService', callback);
    },
    create: (title, callback) => {
        db.query('INSERT INTO otherService (title) VALUES (?)', [title], callback);
    },
    update: (id, title, callback) => {
        db.query('UPDATE otherService SET title = ? WHERE id = ?', [title, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM otherService WHERE id = ?', [id], callback);
    }
};

module.exports = OtherService;
