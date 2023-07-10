const express = require('express')
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController')
router.get('/:name', coursesController.show)
module.exports = router