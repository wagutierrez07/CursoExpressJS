
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'productos'
});

connection.connect(
    (err)=>{
        if (!err) {
            console.log("conexion exitosa");
        }else{
            console.log("conexion fallida");
        }
    }
);

/*connection.query("SELECT * FROM producto", function (err, results) {
    console.log(results);
});

connection.end();*/

module.exports = connection;