const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

//appel des middlewares, faudra les faire
const middlewares = {
    // middleware1 : require('../middlewares/middle'),
    // middleware2 : require('../middlewares/middle2')
};

//la distribution des routes
router.get('/', );

//export du module router
module.exports = router;
