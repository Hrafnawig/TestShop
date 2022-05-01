const router = require('express').Router();
const Controller= require('../controllers/store.controller');
const bodyParser = require('body-parser').json();

router.get('/products',Controller.GetProducts);
router.post('/order',bodyParser,Controller.Order);

module.exports = router;