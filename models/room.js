const db = require('../config/db');

const RoomCont = {
    getAll: callback => {
        db.query('SELECT * FROM roomcont', callback);
    },
    create: (description, title, imagePath, callback) => {
        db.query('INSERT INTO roomcont (description, title, image) VALUES (?, ?, ?)', [description, title, imagePath], callback);
    },
    update: (id, description, title, imagePath, callback) => {
        db.query('UPDATE roomcont SET description = ?, title = ?, image = ? WHERE id = ?', [description, title, imagePath, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM roomcont WHERE id = ?', [id], callback);
    }
};

module.exports = RoomCont;
