const Home = require('../models/home');
const multer = require('multer');
const path = require('path');

// Setup Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/homeUploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');


// SQL Method
exports.getHome = (req, res) => {
    Home.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createHome = (req, res) => {
    const imagePath = req.file ? req.file.path : null;
    Home.create(imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateHome = (req, res) => {
    const { id } = req.params;
    const imagePath = req.file ? req.file.path : null;
    Home.update(id, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteHome = (req, res) => {
    const { id } = req.params;
    Home.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
