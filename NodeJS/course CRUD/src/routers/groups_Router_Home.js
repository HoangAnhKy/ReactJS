const express = require('express');
const router = express.Router();
const homeControler = require('../app/controller/HomeController');

router.post('/post', homeControler.add);
router.get('/edit/:id', homeControler.edit);
router.post('/update/:id', homeControler.update);
router.get('/delete/:id', homeControler.delete);
router.get('/create', homeControler.create);
router.get('/', homeControler.index);

module.exports = router;
