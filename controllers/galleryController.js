const Gallery = require('../models/galleryModels/gallery');
const multer = require('multer');
const path = require('path');

// Setup Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/gallery');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');

exports.getGallery = (req, res) => {
    Gallery.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createGallery = (req, res) => {
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;
    Gallery.create(title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateGallery = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;
    Gallery.update(id, title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteGallery = (req, res) => {
    const { id } = req.params;
    Gallery.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
