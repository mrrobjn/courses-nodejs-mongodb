const Courses = require('../models/courses')
class SiteController {
    // GET home
   async home(req, res) {
     await   Courses.find({}).then((courses) => {
            res.json(courses);
        })
        .catch((err) => { 
            res.status(400).json({ err}) });
    }
    // GET search
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController