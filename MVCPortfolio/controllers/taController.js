exports.getTA02 = (req, res, next) => {
    res.render('teamActivities/ta02', {
        pageTitle: 'Team Activity Week 2',
        path: '/ta02'
    });
}

exports.getTA03 = (req, res, next) => {
    res.render('teamActivities/ta03', {
        pageTitle: 'Team Activity Week 3',
        path: '/ta03'
    });
}