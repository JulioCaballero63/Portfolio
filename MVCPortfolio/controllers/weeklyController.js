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

exports.getOnePageApp = (req, res, next) => {
    res.render('blockTwoChallenge', {
        pageTitle: 'Block Two Challenge',
        path: '/onePageApp'
    });
}

exports.getAll = (req, res, next) => {
    res.render('index', {
        pageTitle: 'WDD 330 Portfolio',
        path: '/'
    });
}