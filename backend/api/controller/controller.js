const ModelTest = require('../models/models');

class ControllerTest {
    static GetArmes(req, res) {
        ModelTest.GetArmes().then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetArmeId(req, res) {
        ModelTest.GetArmeId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetSkin(req, res) {
        ModelTest.GetSkin().then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetSkinId(req, res) {
        ModelTest.GetSkinId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }
}

module.exports = ControllerTest;