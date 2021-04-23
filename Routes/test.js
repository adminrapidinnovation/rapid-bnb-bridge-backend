const express = require('express');
const router = express.Router();

const testController = require('../Controllers/test');

router.get("/",testController.controllerThing);

router.get("/checkForBinanceEntry", testController.checkForBinanceEntries);

router.get("/checkForEthereumEntry", testController.checkForEthereumEntries);

module.exports = router;