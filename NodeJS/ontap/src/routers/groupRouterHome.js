const express = require('express');
const router = express.Router();
const HomeController = require('../app/controller/HomeController');

router.get('/create', HomeController.create);
router.post('/store', HomeController.store);
router.get('/', HomeController.index);

module.exports = router;
