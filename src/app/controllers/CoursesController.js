const { mongooseToObject } = require('../../utils/mongoose')
const Courses = require('../models/courses')
class CoursesController {
    // GET courses/:slug
    show(req, res, next) {
        Courses.findOne({ name: req.params.name }).lean()
            .then((course) => {
                res.render('courses/show', { course })
            }).catch(next)
    }
    create(req, res, next) {
        res.render('courses/create')
    }
}
module.exports = new CoursesController