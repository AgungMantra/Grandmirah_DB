const RoomCont = require('../models/room');
const multer = require('multer');
const path = require('path');

// Setup Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/roomUploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');

exports.getRoomCont = (req, res) => {
    RoomCont.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createRoomCont = (req, res) => {
    const { description, title } = req.body;
    const imagePath = req.file ? req.file.path : null;

    RoomCont.create(description, title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateRoomCont = (req, res) => {
    const { id } = req.params;
    const { description, title } = req.body;
    const imagePath = req.file ? req.file.path : null;

    RoomCont.update(id, description, title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteRoomCont = (req, res) => {
    const { id } = req.params;
    RoomCont.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
