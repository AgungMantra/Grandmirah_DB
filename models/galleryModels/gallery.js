const db = require('../../config/db');

const Gallery = {
    getAll: callback => {
        db.query('SELECT * FROM gallery', callback);
    },
    create: (title, imagePath, callback) => {
        db.query('INSERT INTO gallery (title, image) VALUES (?, ?)', [title, imagePath], callback);
    },
    update: (id, title, imagePath, callback) => {
        db.query('UPDATE gallery SET title = ?, image = ? WHERE id = ?', [title, imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM gallery WHERE id = ?', [id], callback);
    }
};

module.exports = Gallery;
