const db = require('../../config/db');

const DescriptionImage = {
    getAll: callback => {
        db.query('SELECT * FROM descriptionImage', callback);
    },
    create: (id, description_id, imagePath, callback) => {
        db.query('INSERT INTO descriptionImage (id, description_id, imagePath) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE imagePath = VALUES(imagePath)', [id, description_id, imagePath], callback);
    },
    update: (id, imagePath, callback) => {
        db.query('UPDATE descriptionImage SET imagePath = ? WHERE id = ?', [imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM descriptionImage WHERE id = ?', [id], callback);
    }
};

module.exports = DescriptionImage;
