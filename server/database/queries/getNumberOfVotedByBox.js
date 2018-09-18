// get number of already voted voters in a specific box.
const dbConnection = require('../dbConnection');

const getNumberOfVotedByBox = (numOfBox, cb) => {
  const queryString = 'SELECT COUNT(*) FROM voters WHERE box_number=$1 and status=true';
  dbConnection.query(queryString, [numOfBox], cb);
};

module.exports = getNumberOfVotedByBox;
