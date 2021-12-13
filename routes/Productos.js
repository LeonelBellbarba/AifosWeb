var express = require('express');
var router = express.Router();

/* GET Productos page. */
router.get('/', function(req, res, next) {
  res.render('Productos', { isProductos: true });
});






module.exports = router;
