const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewController')
// news
router.get('/:slug', newsController.show)
// home & search
router.get('/', newsController.index)
module.exports = router