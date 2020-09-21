const { Router } = require('express');
const router = Router();
const ShipController = require('../controller/ShipController');

router.get('/', ShipController.getShip);
router.get('/add', ShipController.addFormShip);
router.post('/add', ShipController.addShip);
router.get('/delete/:id', ShipController.deleteShip);

module.exports = router;