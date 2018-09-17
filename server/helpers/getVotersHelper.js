const { getVoterByName, getVoterByIdOrSerial } = require('../database/queries/getVoters');

const getVotersFromsDB = (input, boxNumber, cb) => {
  if (Number.isNaN(Number(input))) {
    getVoterByName(input, boxNumber, cb);
  } else {
    // the input is number
    getVoterByIdOrSerial(Number(input), boxNumber, cb);
  }
};

module.exports = getVotersFromsDB;
