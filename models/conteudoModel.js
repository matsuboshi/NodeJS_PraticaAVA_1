module.exports = function () {
  this.getConteudo = function (connection, callback) {
    connection.query('select * from conteudo', callback);
  };

  this.getConteudoNewest = function (connection, callback) {
    connection.query(
      'select * from conteudo order by id desc limit 3',
      callback
    );
  };

  this.getConteudoFront = function (connection, callback) {
    connection.query(
      "select * from conteudo where categoria = 'frontend'",
      callback
    );
  };

  this.getConteudoBack = function (connection, callback) {
    connection.query(
      "select * from conteudo where categoria = 'backend'",
      callback
    );
  };

  this.salvarConteudo = function (conteudo, connection, callback) {
    connection.query('insert into conteudo set ?', conteudo);
  };

  return this;
};
