/* eslint-disable */

// eslint disabled in this file due to query problems with LIKE statment
// (notice: '%' in the passed array, otherwise it won't work)

// get voter can be done by searching in 2 different ways:
// 1.get voter by name which search for any voter that his name contains the search query passed.
// 2.get voter by id or serial ehich search for any voter that his id or serial contains
// the search query passed.

const dbConnection = require('../dbConnection');

const getVoterByName = (nameOfVoter, boxNumber, cb) => {
  const queryString =
    'SELECT id,full_name,serial_box_number FROM voters WHERE box_number=$1 AND full_name like $2';
  dbConnection.query(queryString, [boxNumber, '%' + nameOfVoter + '%'], cb);
};

const getVoterByIdOrSerial = (idOrSerial, boxNumber, cb) => {
  const queryString =
    'SELECT id,full_name,serial_box_number FROM voters WHERE box_number=$1 AND (id::text LIKE $2 OR serial_box_number::text LIKE $2)';
  dbConnection.query(queryString, [boxNumber, '%' + idOrSerial + '%'], cb);
};

module.exports = { getVoterByName, getVoterByIdOrSerial };
