const jwt = require('jsonwebtoken');
const getPassword = require('../database/queries/getPassword');
const { comparePasswords } = require('./hashHelper');
const getBoxByUser = require('../database/queries/getBoxByUser');

const { secret } = process.env;
require('env2')('./config.env');

module.exports = (req, res) => {
  const { username, password } = req.body;
  getPassword(username, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      const hashedPassword = result.rows[0].password;
      const idOfUser = result.rows[0].id;
      comparePasswords(password, hashedPassword, (err, checked) => {
        if (checked) {
          // set the cookie
          getBoxByUser(idOfUser, (error1, result1) => {
            const idOfBox = result1.rows[0].id;
            res.cookie('election-app', jwt.sign({ name: username, box: idOfBox }, secret));
            res.status(200).end();
          });
        } else {
          res.status(500).end();
        }
      });
    }
  });
};
