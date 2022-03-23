const path = require('path');

const express = require('express');

const weeklyController = require('../controllers/weeklyController');

const router = express.Router();


router.get('/index', weeklyController.getIndex);

router.get('/week1', weeklyController.getWeekOne);

router.get('/week2', weeklyController.getWeekTwo);

router.get('/week3', weeklyController.getWeekThree);

router.get('/week4', weeklyController.getWeekFour);

router.get('/week5', weeklyController.getWeekFive);

router.get('/week6', weeklyController.getWeekSix);

router.get('/week7', weeklyController.getWeekSeven);

router.get('/week8', weeklyController.getWeekEight);

router.get('/week9', weeklyController.getWeekNine);

router.get('/week10', weeklyController.getWeekTen);

router.get('/week11', weeklyController.getWeekEleven);

router.get('/onePageApp', weeklyController.getOnePageApp);

router.get('/', weeklyController.getAll);

module.exports = router;