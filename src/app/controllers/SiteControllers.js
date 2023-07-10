const Courses = require('../models/courses')
class SiteController {
    // GET home
    async home(req, res) {
        await Courses.find({}).lean()
            .then((courses) => {
                res.render('home', { courses });
            })
            .catch((err) => {
                res.status(400).json({ err })
            });
    }
    // GET search
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController