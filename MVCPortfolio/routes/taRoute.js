const path = require('path');

const express = require('express');

const taController = require('../controllers/taController');

const router = express.Router();


router.get('/ta02', taController.getTA02);

router.get('/ta03', taController.getTA03);

router.get('/ta04', taController.getTA04);

router.get('/ta05', taController.getTA05);

router.get('/ta07', taController.getTA07);

router.get('/ta08', taController.getTA08);

router.get('/ta09', taController.getTA09);

router.get('/ta10', taController.getTA10);

router.get('/ta11', taController.getTA11);

module.exports = router;