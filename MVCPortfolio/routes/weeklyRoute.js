const path = require('path');

const express = require('express');

const weeklyController = require('../controllers/weeklyController');

const router = express.Router();


router.get('/index', weeklyController.getIndex);

router.get('/week1', weeklyController.getWeekOne);

router.get('/week2', weeklyController.getWeekTwo);

router.get('/week3', weeklyController.getWeekThree);

router.get('/onePageApp', weeklyController.getOnePageApp);

router.get('/', weeklyController.getAll);

module.exports = router;