const Course = require("../models/courses")
class UsersController {
    // GET user/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
        .lean()
        .then((courses) =>
            res.render("users/stored-courses", { courses: courses }),
        ).catch(next)
    }
    
}
module.exports = new UsersController