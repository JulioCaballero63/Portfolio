const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
// const weeklyController = require('../controllers/weeklyController');

router.get('/index', (req, res, next) => {
    res.render('index', { pageTitle: 'WDD 330 Portfolio' })
});

router.get('/week1', (req, res, next) => {
    res.render('weeklyActivities/week1', {
        pageTitle: 'Week One',
        path: '/week1'
    })
});

router.get('/week2', (req, res, next) => {
    res.render('weeklyActivities/week2', {
        pageTitle: 'Week Two',
        path: '/week2'
    })
});

router.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'WDD 330 Portfolio' })
});

module.exports = router;