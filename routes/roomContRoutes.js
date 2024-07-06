const express = require('express');
const router = express.Router();
const { getRoomCont, createRoomCont, updateRoomCont, deleteRoomCont, uploadImage } = require('../controllers/roomContController');

router.get('/roomcont', getRoomCont);
router.post('/roomcont', uploadImage, createRoomCont);
router.put('/roomcont/:id', uploadImage, updateRoomCont);
router.delete('/roomcont/:id', deleteRoomCont);

module.exports = router;
