'use strict';

const app = require('express')();
const session = require('express-session');
const env = require('../../env.json');

app.use(session({
  secret: env.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  // session logger
  console.log('session', req.session);
  next();
});

module.exports = app;
