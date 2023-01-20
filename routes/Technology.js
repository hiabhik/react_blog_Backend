const express = require('express')
const sportsController = require('../controller/SportsData');
const router = express.Router();

router.get("/technology", sportsController.SpData)

module.exports = router;