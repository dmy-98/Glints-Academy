const { Router } = require('express');
const router = Router();
const ShipRoutes = require('./ship');
const PirateRoutes = require('./pirate');

router.get('/', (req, res) => res.render('index.ejs'));

router.use('/ships', ShipRoutes)
router.use('/pirates', PirateRoutes)

module.exports = router;