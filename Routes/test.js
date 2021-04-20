const express = require('express');
const router = express.Router();

const testController = require('../Controllers/test');

// router.get("/",testController.controllerThing);

router.get("/contractBalance",testController.balanceOfContract);

router.get("/approveContract",testController.approveContract);

router.get("/approvedContracts",testController.checkApprovedContracts);

module.exports = router;