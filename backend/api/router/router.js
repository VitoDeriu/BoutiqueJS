const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


//la distribution des routes
router.get('/armes', controller.GetArmes);
router.get('/armes/:id', controller.GetArmeId);
router.get('/skins', controller.GetSkin);
router.get('/skin/:id', controller.GetSkinId);
router.get('/images', controller.GetImage);
router.get('/image/:id', controller.GetImageId);
router.get('/baseimage/:id', controller.GetBaseImageId);
router.get('/variantes', controller.GetVariante);
router.get('/variante/:id', controller.GetVarianteId);
router.get('/armes/type/:id', controller.GetArmesTypeId);
router.get('/skinidbyarmeid/:id', controller.GetSkinIdByArmeId);

//export du module router
module.exports = router;
