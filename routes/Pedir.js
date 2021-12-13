var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */

//Conecta con la vista
router.get('/', function(req, res, next) {
  res.render('Pedir', { isPedir: true });
});

//Funcionamiento del formulario
router.post('/', async function(req,res,next){
  //Aca va a procesar lo que pase en el formulario
  console.log(req.body);
  var nombre    = req.body.nombre;
  var apellido  = req.body.apellido;
  var direccion = req.body.direccion;
  var numero    = req.body.numero;
  var ciudad    = req.body.ciudad;
  
  var obj ={
      to: 'leo16_b10@hotmail.com',
      subject: 'Contacto desde la web de aifos',
      html: nombre + ' se conctacto a traves de la web y quiere saber mas info sobre aifos...'
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj); //Envio de los datos

  res.render('Pedir',{
    message: 'Mensaje enviado correctamente'
  })

});






module.exports = router;