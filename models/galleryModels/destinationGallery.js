const db = require('../../config/db');

const DestinationGallery = {
    getAll: callback => {
        db.query('SELECT * FROM destinationGallery', callback);
    },
    create: (title, imagePath, callback) => {
        db.query('INSERT INTO destinationGallery (title, image) VALUES (?, ?)', [title, imagePath], callback);
    },
    update: (id, title, imagePath, callback) => {
        db.query('UPDATE destinationGallery SET title = ?, image = ? WHERE id = ?', [title, imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM destinationGallery WHERE id = ?', [id], callback);
    }
};

module.exports = DestinationGallery;
