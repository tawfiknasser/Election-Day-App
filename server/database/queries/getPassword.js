const dbConnection = require('../dbConnection');

const getPasswrord = (username, cb) => {
  dbConnection.query('SELECT password FROM users WHERE user_name = $1 ', [username], cb);
};

module.exports = getPasswrord;
