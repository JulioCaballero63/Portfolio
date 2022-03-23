const path = require('path');

const express = require('express');

const taController = require('../controllers/taController');

const router = express.Router();


router.get('/ta02', taController.getTA02);

router.get('/ta03', taController.getTA03);

module.exports = router;