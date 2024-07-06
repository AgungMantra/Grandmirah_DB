const db = require('../../config/db');

const ServiceDescription = {
    getAll: callback => {
        db.query('SELECT * FROM serviceDescription', callback);
    },
    create: (title, description, callback) => {
        db.query('INSERT INTO serviceDescription (title, description) VALUES (?, ?)', [title, description], callback);
    },
    update: (id, title, description, callback) => {
        db.query('UPDATE serviceDescription SET title = ?, description = ? WHERE id = ?', [title, description, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM serviceDescription WHERE id = ?', [id], callback);
    }
};

module.exports = ServiceDescription;
