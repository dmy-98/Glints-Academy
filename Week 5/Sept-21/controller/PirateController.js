const { Pirates } = require('../models')

class PirateController {
    static getPirate(req, res) {
        Pirates.findAll()
            .then(result => {
                res.render('pirates.ejs', { pirates: result })
            })
            .catch(err => {
                console.log(err);
            })
    }
    static addFormPirate(req, res) {
        res.render('addPirate.ejs');
    }
    static addPirate(req, res) {
        const {
            name,
            status,
            haki
        } = req.body;
        Pirates.create({
                name,
                status,
                haki
            })
            .then(() => {
                res.redirect('/pirates');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static findById(req, res) {
        const id = req.params.id;
        Pirates.findOne({
                where: { id }
            })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deletePirate(req, res) {
        const id = req.params.id;
        Pirates.destroy({
                where: { id }
            })
            .then(() => {
                res.redirect('/pirates')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = PirateController;