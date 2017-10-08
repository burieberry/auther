'use strict';

var app = require('./app');
var db = require('./db');
const session = require('express-session');
const sessionSecret = require('../env.json');

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false
}));

var port = 8080;
var server = app.listen(port, function (err) {
  if (err) throw err;
  console.log('HTTP server patiently listening on port', port);
  db.sync()
  .then(function () {
    console.log('Oh and btw the postgres server is totally connected, too');
  });
});

module.exports = server;
