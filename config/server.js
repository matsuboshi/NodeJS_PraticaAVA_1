var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

consign()
  .include('./routes')
  .then('./config/database.js')
  .then('./models')
  .into(app);

module.exports = app;
