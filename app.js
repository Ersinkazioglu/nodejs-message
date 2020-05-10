const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;
  var path = require('path');

var session = require('express-session');

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
  }));
app.listen(port);
console.log('API server started on: ' + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route

module.exports = app;