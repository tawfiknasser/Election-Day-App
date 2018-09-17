const dbConnection = require('../dbConnection');

const getUserIdByName = (nameOfUser, cb) => {
  const queryString = 'SELECT id FROM users WHERE user_name=$1';
  dbConnection.query(queryString, [nameOfUser], cb);
};

module.exports = { getUserIdByName };
