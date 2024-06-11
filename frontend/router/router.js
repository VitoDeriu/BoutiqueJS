const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/index', controller.Index);
router.get('/skindetail', controller.SkinDetail);

module.exports = router;