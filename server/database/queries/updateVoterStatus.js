const dbConnection = require('../dbConnection');
// here it set the status as what is sent to her from the frontend
const updateVoterStatus = (idOfVoter, status, cb) => {
  const queryString = 'UPDATE voters SET status = $1 WHERE id = $2';
  dbConnection.query(queryString, [status, idOfVoter], cb);
};

module.exports = updateVoterStatus;
