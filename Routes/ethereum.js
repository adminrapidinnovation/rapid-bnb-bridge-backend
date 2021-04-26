const express = require('express');
const router = express.Router();

const controller = require('../Controllers/ethereum');

router.get("/", controller.controllerThing);

router.get("/checktransaction", controller.checkForEthereumEntries);

module.exports = router;