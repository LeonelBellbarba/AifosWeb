var express = require('express');
var router = express.Router();

/* GET Productos page. */
router.get('/Productos', function(req, res, next) {
  res.render('Productos', { title: 'Productosssss' });
});


module.exports = router;
