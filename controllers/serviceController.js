const ServiceImages = require('../models/serviceModels//serviceImages');
const ServiceOnlyImages = require('../models/serviceModels/serviceOnlyImages');
const ServiceDescription = require('../models/serviceModels/serviceDescription');
const OtherService = require('../models/serviceModels/otherService');
const multer = require('multer');
const path = require('path');

// Setup Multer storage for different models
const storageImages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/serviceUploads/corouselImages');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const storageOnlyImages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/serviceUploads/otherImages');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadImages = multer({ storage: storageImages });
const uploadOnlyImages = multer({ storage: storageOnlyImages });

exports.uploadImage = uploadImages.single('image');
exports.uploadOnlyImage = uploadOnlyImages.single('image');




// Service Images
exports.getServiceImages = (req, res) => {
    ServiceImages.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createServiceImages = (req, res) => {
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;

    ServiceImages.create(title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateServiceImages = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const imagePath = req.file ? req.file.path : null;

    ServiceImages.update(id, title, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteServiceImages = (req, res) => {
    const { id } = req.params;
    ServiceImages.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Service Only Images
exports.getServiceOnlyImages = (req, res) => {
    ServiceOnlyImages.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createServiceOnlyImages = (req, res) => {
    const imagePath = req.file ? req.file.path : null;

    ServiceOnlyImages.create(imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateServiceOnlyImages = (req, res) => {
    const { id } = req.params;
    const imagePath = req.file ? req.file.path : null;

    ServiceOnlyImages.update(id, imagePath, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteServiceOnlyImages = (req, res) => {
    const { id } = req.params;
    ServiceOnlyImages.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Service Description
exports.getServiceDescription = (req, res) => {
    ServiceDescription.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createServiceDescription = (req, res) => {
    const { title, description } = req.body;

    ServiceDescription.create(title, description, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateServiceDescription = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    ServiceDescription.update(id, title, description, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteServiceDescription = (req, res) => {
    const { id } = req.params;
    ServiceDescription.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Other Service
exports.getOtherService = (req, res) => {
    OtherService.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createOtherService = (req, res) => {
    const { title } = req.body;

    OtherService.create(title, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateOtherService = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    OtherService.update(id, title, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteOtherService = (req, res) => {
    const { id } = req.params;
    OtherService.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
