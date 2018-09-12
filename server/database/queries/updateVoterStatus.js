const dbConnection = require('../dbConnection');

const updateVoterStatus = (idOfVoter) => {
  const queryString = 'UPDATE voters SET status = 3 WHERE id = $1';
  dbConnection.query(queryString, [idOfVoter], (err) => {
    if (err) {
      console.log(err);
    } else {
      // this is just for check - remove else before push
      console.log('success');
    }
  });
};

module.exports = updateVoterStatus;
