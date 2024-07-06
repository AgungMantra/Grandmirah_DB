const express = require('express');
const router = express.Router();
const { getAbout, createAbout, updateAbout, deleteAbout, uploadImage } = require('../controllers/aboutController');

router.get('/about', getAbout);
router.post('/about', uploadImage, createAbout);
router.put('/about/:id', uploadImage, updateAbout);
router.delete('/about/:id', deleteAbout);

module.exports = router;
