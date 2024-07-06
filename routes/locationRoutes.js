const express = require('express');
const router = express.Router();
const { getLocationCont, createLocationCont, updateLocationCont, deleteLocationCont } = require('../controllers/locationController');

router.get('/locationCont', getLocationCont);
router.post('/locationCont', createLocationCont);
router.put('/locationCont/:id', updateLocationCont);
router.delete('/locationCont/:id', deleteLocationCont);

module.exports = router;
