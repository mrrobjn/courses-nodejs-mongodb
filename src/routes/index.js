const newsRouter = require('./news.route')
const coursesRouter = require('./courses.route')
const sitesRouter = require('./sites.route')
const route = (app) => {
    app.use('/news', newsRouter);
    // home and search
    app.use('/', sitesRouter);
    app.use('/courses', coursesRouter);
}
module.exports = route