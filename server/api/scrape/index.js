'use strict';

var express = require('express');
var controller = require('./scrape.controller');

var router = express.Router();

router.post('/:search', controller.scrapeItBaby);

module.exports = router;
