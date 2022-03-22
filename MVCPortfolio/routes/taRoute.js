const path = require('path');

const express = require('express');

const taController = require('../controllers/taController');

const router = express.Router();


router.get('/ta02', taController.getTA02);

module.exports = router;