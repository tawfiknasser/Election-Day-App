// get box id by user on box.
const dbConnection = require('../dbConnection');

const getBoxByUser = (idOfUser, cb) => {
  const queryString = 'SELECT id FROM box WHERE user_on_box=$1';
  dbConnection.query(queryString, [idOfUser], cb);
};

module.exports = getBoxByUser;
