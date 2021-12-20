var express = require('express');
var router = express.Router();
var usuariosModels = require('../../models/usuariosModels');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/introduccion', { title: 'holaa' });
});


module.exports = router;