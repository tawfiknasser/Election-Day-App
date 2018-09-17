const dbConnection = require('../dbConnection');
/* this query update the voter status when clicking on the card
    status could be true or false
    true = voted
    false = default value , and when unMarking someone.
*/
const updateVoterStatus = (idOfVoter, status, cb) => {
  const queryString = 'UPDATE voters SET status = $1 WHERE id = $2';
  dbConnection.query(queryString, [status, idOfVoter], cb);
};

module.exports = updateVoterStatus;
