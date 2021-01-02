module.exports = function (app) {
  app.get('/', function (req, res) {
    var connection = app.config.database();

    var query = app.models.conteudoModel;

    query.getConteudoNewest(connection, function (error, results, fields) {
      console.log(error, results);
      res.render('home/index', { dados: results });
    });
  });
};
