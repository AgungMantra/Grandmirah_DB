const db = require('../config/db');

const LocationCont = {
    getAll: callback => {
        db.query('SELECT * FROM locationCont', callback);
    },
    create: (description, callback) => {
        db.query('INSERT INTO locationCont (description) VALUES (?)', [description], callback);
    },
    update: (id, description, callback) => {
        db.query('UPDATE locationCont SET description = ? WHERE id = ?', [description, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM locationCont WHERE id = ?', [id], callback);
    }
};

module.exports = LocationCont;
