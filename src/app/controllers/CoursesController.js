const Courses = require('../models/courses')

class CoursesController {
    // GET courses/:slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show', { course })
            }).catch(next)
    }
    // GET courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // GET courses/store
    post(req, res, next) {
        const course = new Courses(req.body)
        course.save()
            .then(()=>{
                res.redirect(`/`)
            })
            .catch(err => console.error(err))
    }
}
module.exports = new CoursesController