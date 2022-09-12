const express = require('express');
const router = express.Router();

const HomeController = require('../app/controller/HomeController');
router.post('/content', HomeController.content);
router.get('/', HomeController.index);

module.exports = router;
