const db = require('../../config/db');

const ServiceImages = {
    getAll: callback => {
        db.query('SELECT * FROM serviceImages', callback);
    },
    create: (title, imagePath, callback) => {
        db.query('INSERT INTO serviceImages (title, image) VALUES (?, ?)', [title, imagePath], callback);
    },
    update: (id, title, imagePath, callback) => {
        db.query('UPDATE serviceImages SET title = ?, image = ? WHERE id = ?', [title, imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM serviceImages WHERE id = ?', [id], callback);
    }
};

module.exports = ServiceImages;
