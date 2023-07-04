const newsRouter = require('./news.route')
const siteRouter = require('./sites.router')
const route = (app) => {
    app.use('/news', newsRouter);
    // home and search
    app.use('/', siteRouter);
}
module.exports = route