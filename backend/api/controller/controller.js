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

    static GetImage(req, res) {
        ModelTest.GetImage().then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetImageId(req, res) {
        ModelTest.GetImageId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetBaseImageId(req, res) {
        ModelTest.GetBaseImageId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetIconeId(req, res) {
        ModelTest.GetIconeId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetVariante(req, res) {
        ModelTest.GetVariante().then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetVarianteId(req, res) {
        ModelTest.GetVarianteId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetArmesTypeId(req, res) {
        ModelTest.GetArmesTypeId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }

    static GetSkinIdByArmeId(req, res) {
        ModelTest.GetSkinIdByArmeId(req.params.id).then(data => {
            return res.json(data);
        }).catch(err => {
            return res.status(500).json(err);
        })
    }
}

module.exports = ControllerTest;