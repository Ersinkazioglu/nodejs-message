'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mysqldatabase'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
