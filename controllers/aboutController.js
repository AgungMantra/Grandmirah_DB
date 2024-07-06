const AboutDescription = require('../models/aboutModels/aboutDescription');
const DescriptionImage = require('../models/aboutModels/descriptionImage');
const multer = require('multer');
const path = require('path');

// Setup Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/aboutUploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

exports.uploadImage = upload.single('image');

exports.getAbout = async (req, res) => {
    try {
        const descriptions = await new Promise((resolve, reject) => {
            AboutDescription.getAll((err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        const images = await new Promise((resolve, reject) => {
            DescriptionImage.getAll((err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        const aboutData = descriptions.map(description => {
            const descriptionImages = images.filter(image => image.description_id === description.id);
            return { ...description, images: descriptionImages };
        });

        res.json(aboutData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAbout = async (req, res) => {
    const { id, description } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const result = await new Promise((resolve, reject) => {
            AboutDescription.create(id, description, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        if (imagePath) {
            const description_id = result.insertId || id;
            await new Promise((resolve, reject) => {
                DescriptionImage.create(null, description_id, imagePath, (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                });
            });
        }

        res.json({ message: 'About created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAbout = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        await new Promise((resolve, reject) => {
            AboutDescription.update(id, description, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        if (imagePath) {
            await new Promise((resolve, reject) => {
                DescriptionImage.update(id, imagePath, (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                });
            });
        }

        res.json({ message: 'About updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAbout = async (req, res) => {
    const { id } = req.params;

    try {
        await new Promise((resolve, reject) => {
            DescriptionImage.delete(id, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        await new Promise((resolve, reject) => {
            AboutDescription.delete(id, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });

        res.json({ message: 'About deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
