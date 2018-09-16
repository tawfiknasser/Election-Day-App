const dbConnection = require('../dbConnection');

const updateVoterStatus = (idOfVoter, status, cb) => {
  const queryString = 'UPDATE voters SET status = $1 WHERE id = $2';
  dbConnection.query(queryString, [status, idOfVoter], cb);
};

module.exports = updateVoterStatus;
