const Courses = require('../models/courses')
class SiteController {
    // GET home
    async home(req, res,next) {
        await Courses.find({}).lean()
            .then((courses) => {
                res.render('home', { courses });
                // res.json(courses);
            })
            .catch((next));
    }
    // GET search
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController