exports.getTA02 = (req, res, next) => {
    res.render('teamActivities/ta02', {
        pageTitle: 'Team Activity Week 2',
        path: '/ta02'
    });
}