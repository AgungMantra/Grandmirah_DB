const db = require('../../config/db');

const ServiceOnlyImages = {
    getAll: callback => {
        db.query('SELECT * FROM serviceOnlyImages', callback);
    },
    create: (imagePath, callback) => {
        db.query('INSERT INTO serviceOnlyImages (image) VALUES (?)', [imagePath], callback);
    },
    update: (id, imagePath, callback) => {
        db.query('UPDATE serviceOnlyImages SET image = ? WHERE id = ?', [imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM serviceOnlyImages WHERE id = ?', [id], callback);
    }
};

module.exports = ServiceOnlyImages;
