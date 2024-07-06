const DestinationGallery = require('../models/galleryModels/destinationGallery');
const multer = require('multer');
const path = require('path');

// Setup Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/destinationGallery');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');

exports.getDestinationGallery = (req, res) => {
    DestinationGallery.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createDestinationGallery = (req, res) => {
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;
    DestinationGallery.create(title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateDestinationGallery = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;
    DestinationGallery.update(id, title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteDestinationGallery = (req, res) => {
    const { id } = req.params;
    DestinationGallery.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
