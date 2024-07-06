const db = require('../../config/db');

const AboutDescription = {
    getAll: callback => {
        db.query('SELECT * FROM aboutDescription', callback);
    },
    create: (id, description, callback) => {
        db.query('INSERT INTO aboutDescription (id, description) VALUES (?, ?) ON DUPLICATE KEY UPDATE description = VALUES(description)', [id, description], callback);
    },
    update: (id, description, callback) => {
        db.query('UPDATE aboutDescription SET description = ? WHERE id = ?', [description, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM aboutDescription WHERE id = ?', [id], callback);
    }
};

module.exports = AboutDescription;
