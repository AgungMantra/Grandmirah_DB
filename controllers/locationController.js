const LocationCont = require('../models/location');

exports.getLocationCont = (req, res) => {
    LocationCont.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.createLocationCont = (req, res) => {
    const { description } = req.body;
    LocationCont.create(description, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.updateLocationCont = (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    LocationCont.update(id, description, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.deleteLocationCont = (req, res) => {
    const { id } = req.params;
    LocationCont.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
