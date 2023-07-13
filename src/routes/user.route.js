const express = require('express')
const router = express.Router();
const usersController = require('../app/controllers/UsersController')
router.get('/stored/courses', usersController.storedCourses)
module.exports = router