const Courses = require('../models/courses')
class CoursesController {
    // GET courses/:slug
    show(req, res) {
        Courses.findOne({ name: req.params.name })
            .then((course) => {
                res.json(course)
            }).catch((err) => console.error(err))
    }
}
module.exports = new CoursesController