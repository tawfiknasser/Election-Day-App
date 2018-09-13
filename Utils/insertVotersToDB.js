// importing xlsx file as an array
// loop over the array imported
// take the relevant data to a single voters
// run query of inserting a voter with the data

const importXlsxFile = require('./importXlsxFile');
const insertVoters = require('../server/database/queries/insertVoters');

const path = process.argv[2];
// get data from the external file to an array
const votersList = importXlsxFile(path);

let id;
let fullName;
let boxNumber;
let address;
let serialBoxNumber;
// run on the array (where each row contains the data of one voter) and get all the relevant data
votersList.forEach((row, index) => {
  // first row is names of the columns in the xlsx file
  // last row is an empty row and both should be ignored
  if (index === 0 || index === votersList.length - 1) {
    return;
  }
  id = row[0];
  fullName = `${row[2].trim()} ${row[3].trim()} ${row[1].trim()}`;
  boxNumber = row[5];
  address = `${row[11].trim()} ${row[12]}`;
  serialBoxNumber = row[16];
  insertVoters([id, fullName, boxNumber, address, serialBoxNumber]);
});
