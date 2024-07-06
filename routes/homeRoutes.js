const express = require('express');
const router = express.Router();
const { getHome, createHome, updateHome, deleteHome, uploadImage } = require('../controllers/homeController');

router.get('/homecont', getHome);
router.post('/homecont', uploadImage, createHome);
router.put('/homecont/:id', uploadImage, updateHome);
router.delete('/homecont/:id', deleteHome);

module.exports = router;
