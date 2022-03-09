var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET productos page. (productos.ejs) */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM producto", function (err, results) {
        console.log(results);
        res.render('productos', { title: 'Productos', productos: results});
    });
});
  
module.exports = router;