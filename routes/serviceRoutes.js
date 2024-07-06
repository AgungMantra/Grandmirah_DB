const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/serviceImages', serviceController.getServiceImages);
router.post('/serviceImages', serviceController.uploadImage, serviceController.createServiceImages);
router.put('/serviceImages/:id', serviceController.uploadImage, serviceController.updateServiceImages);
router.delete('/serviceImages/:id', serviceController.deleteServiceImages);

router.get('/serviceOnlyImages', serviceController.getServiceOnlyImages);
router.post('/serviceOnlyImages', serviceController.uploadOnlyImage, serviceController.createServiceOnlyImages);
router.put('/serviceOnlyImages/:id', serviceController.uploadOnlyImage, serviceController.updateServiceOnlyImages);
router.delete('/serviceOnlyImages/:id', serviceController.deleteServiceOnlyImages);

router.get('/serviceDescription', serviceController.getServiceDescription);
router.post('/serviceDescription', serviceController.createServiceDescription);
router.put('/serviceDescription/:id', serviceController.updateServiceDescription);
router.delete('/serviceDescription/:id', serviceController.deleteServiceDescription);

router.get('/otherService', serviceController.getOtherService);
router.post('/otherService', serviceController.createOtherService);
router.put('/otherService/:id', serviceController.updateOtherService);
router.delete('/otherService/:id', serviceController.deleteOtherService);

module.exports = router;
