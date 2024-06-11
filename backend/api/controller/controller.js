const ModelTest = require('../models/models');

class ControllerTest {
    static GetArmes(req, res) {
        ModelTest.GetArmes().then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }
}

module.exports = ControllerTest;