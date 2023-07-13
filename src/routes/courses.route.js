const express = require('express')
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController')
router.get('/create', coursesController.create)
router.post('/post', coursesController.post)
router.get('/:slug', coursesController.show)
module.exports = router