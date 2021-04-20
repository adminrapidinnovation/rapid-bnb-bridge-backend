const express = require('express');
const router = express.Router();

const testController = require('../Controllers/test');

router.get("/",testController.controllerThing);

module.exports = router;