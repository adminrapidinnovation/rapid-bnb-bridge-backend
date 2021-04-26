const express = require('express');
const router = express.Router();

const controller = require('../Controllers/binance');

router.get("/", controller.controller);

router.get("/checktransaction", controller.checkForBinanceEntries);

module.exports = router;