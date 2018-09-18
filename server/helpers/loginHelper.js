const jwt = require('express-jwt');
const getPassword = require('../database/queries/getPassword');
const { comparePasswords } = require('./hashHelper');

const { secret } = process.env;
require('env2')('./config.env');

module.exports = (req, res) => {
  const { username, password } = req.body;
  getPassword(username, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      const hashedPassword = result.rows[0].password;
      console.log(result);
      comparePasswords(password, hashedPassword, (err, checked) => {
        if (checked) {
          // set the cookie
          res.cookie('election-app', jwt.sign({ name: username }));
          res.status(200).end();
        } else {
          res.status(500).end();
        }
      });
    }
  });
};
