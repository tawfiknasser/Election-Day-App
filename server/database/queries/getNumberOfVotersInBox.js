// get number of voters in a specific box.
const dbConnection = require('../dbConnection');

const getNumberOfVotersInBox = (numOfBox, cb) => {
  const queryString = 'SELECT COUNT(*) FROM voters WHERE box_number=$1';
  dbConnection.query(queryString, [numOfBox], cb);
};

module.exports = getNumberOfVotersInBox;
