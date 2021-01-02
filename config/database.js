var mysql = require('mysql');

var connMySQL = function () {
  console.log('Connection estabilished with DB!');
  return (connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto_node',
  }));
};

module.exports = function () {
  return connMySQL;
};
