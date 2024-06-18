const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/index', controller.Armes);
router.get('/skindetail', controller.SkinDetail);

router.get('/armes', controller.Armes);
router.get('/armesdetail', controller.Armesbyid);

module.exports = router;