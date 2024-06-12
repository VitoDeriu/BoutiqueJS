const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


//la distribution des routes
router.get('/armes', controller.GetArmes);
router.get('/armes/:id', controller.GetArmeId);
router.get('/skin', controller.GetSkin);
router.get('/skin/:id', controller.GetSkinId);

//export du module router
module.exports = router;
