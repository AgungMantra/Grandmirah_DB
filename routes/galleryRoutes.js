const express = require('express');
const router = express.Router();
const { getGallery, createGallery, updateGallery, deleteGallery, uploadImage } = require('../controllers/galleryController');

router.get('/gallery', getGallery);
router.post('/gallery', uploadImage, createGallery);
router.put('/gallery/:id', uploadImage, updateGallery);
router.delete('/gallery/:id', deleteGallery);

module.exports = router;
