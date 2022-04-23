const router = require('express').Router();
const Controller= require('../controllers/store.controller');
const bodyParser = require('body-parser').json();

router.get('/products',Controller.GetProducts);
// router.post('/book',bodyParser,Controller.HotelBook);

module.exports = router;