exports.getIndex = (req, res, next) => {
    res.render('index', { pageTitle: 'WDD 330 Portfolio' });
}

exports.getWeekOne = (req, res, next) => {
    res.render('weeklyActivities/week1', {
        pageTitle: 'Week One',
        path: '/week1'
    });
}

exports.getWeekTwo = (req, res, next) => {
    res.render('weeklyActivities/week2', {
        pageTitle: 'Week Two',
        path: '/week2'
    });
}

exports.getWeekThree = (req, res, next) => {
    res.render('weeklyActivities/week3', {
        pageTitle: 'Week Three',
        path: '/week3'
    });
}

exports.getWeekFour = (req, res, next) => {
    res.render('weeklyActivities/week4', {
        pageTitle: 'Week Four',
        path: '/week4'
    });
}

exports.getWeekFive = (req, res, next) => {
    res.render('weeklyActivities/week5', {
        pageTitle: 'Week Five',
        path: '/week5'
    });
}

exports.getWeekSix = (req, res, next) => {
    res.render('weeklyActivities/week6', {
        pageTitle: 'Week Six',
        path: '/week6'
    });
}

exports.getWeekSeven = (req, res, next) => {
    res.render('weeklyActivities/week7', {
        pageTitle: 'Week Seven',
        path: '/week7'
    });
}

exports.getWeekEight = (req, res, next) => {
    res.render('weeklyActivities/week8', {
        pageTitle: 'Week Eight',
        path: '/week8'
    });
}

exports.getWeekNine = (req, res, next) => {
    res.render('weeklyActivities/week9', {
        pageTitle: 'Week Nine',
        path: '/week9'
    });
}

exports.getWeekTen = (req, res, next) => {
    res.render('weeklyActivities/week10', {
        pageTitle: 'Week Ten',
        path: '/week10'
    });
}

exports.getWeekEleven = (req, res, next) => {
    res.render('weeklyActivities/week11', {
        pageTitle: 'Week Eleven',
        path: '/week11'
    });
}

exports.getOnePageApp = (req, res, next) => {
    res.render('blockTwoChallenge', {
        pageTitle: 'Block Two Challenge',
        path: '/onePageApp'
    });
}

exports.getTodo = (req, res, next) => {
    res.render('todo', {
        pageTitle: 'To Do',
        path: '/todo'
    });
}

exports.getAll = (req, res, next) => {
    res.render('index', {
        pageTitle: 'WDD 330 Portfolio',
        path: '/'
    });
}