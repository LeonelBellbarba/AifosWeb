var express = require('express');
var router = express.Router();
var usuariosModels = require('../../models/usuariosModels');


// recibir y mostrar la vista de admin/login
router.get('/', function(req, res, next){
    res.render('admin/login',{
        layout: 'admin/layout'
    });
});


router.post('/',async function(req, res,next){
    try{
        var nombre = req.body.nombre;
        var password = req.body.password;

        var data = await usuariosModels.getUserAndPassword(nombre, password)

        if(data != undefined){
            req.session.id_nombre = data.id_client;
            req.session.nombre = data.nombre
            res.redirect('/admin/introduccion');
            
        }else{
            res.render('admin/login',{
                layout: 'admin/layout',
                error: true

            })
        }
    }
    catch(error){
        console.log();
    }
})




module.exports = router;

