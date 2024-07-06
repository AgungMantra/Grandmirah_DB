const express = require('express');
const router = express.Router();
const { getDestinationGallery, createDestinationGallery, updateDestinationGallery, deleteDestinationGallery, uploadImage } = require('../controllers/destinationGalleryController');

router.get('/destinationGallery', getDestinationGallery);
router.post('/destinationGallery', uploadImage, createDestinationGallery);
router.put('/destinationGallery/:id', uploadImage, updateDestinationGallery);
router.delete('/destinationGallery/:id', deleteDestinationGallery);

module.exports = router;
