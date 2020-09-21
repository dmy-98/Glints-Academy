const { Ships } = require('../models')

class ShipController {
    static getShip(req, res) {
        Ships.findAll()
            .then(result => {
                res.render('ships.ejs', { ships: result })
            })
            .catch(err => {
                console.log(err);
            })
    }
    static addFormShip(req, res) {
        res.render('addShip.ejs');
    }
    static addShip(req, res) {
        const {
            name,
            type,
            power
        } = req.body;
        Ships.create({
                name,
                type,
                power
            })
            .then(() => {
                res.redirect('/ships');
            })
            .catch(err => {
                res.send(err);
            })
    }


    static findById(req, res) {
        const id = req.params.id;
        Ships.findOne({
                where: { id }
            })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteShip(req, res) {
        const id = req.params.id;
        Ships.destroy({
                where: { id }
            })
            .then(() => {
                res.redirect('/ships')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ShipController;