/* eslint no-unused-vars: ["error", { "args": "after-used" }] */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const userOnBoxRouter = require('./routes/userOnBox');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client/build')));
}
app.use('/useronbox', userOnBoxRouter);
app.use('/', indexRouter);
// error handlerfunction
// eslint-disable-next-line
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
