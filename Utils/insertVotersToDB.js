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
for (let i = 1; i < 1800; i++) {
  id = votersList[i][0];
  fullName = `${votersList[i][2].trim()} ${votersList[i][3].trim()} ${votersList[i][1].trim()}`;
  boxNumber = votersList[i][5];
  address = `${votersList[i][11].trim()} ${votersList[i][12]}`;
  serialBoxNumber = votersList[i][16];
  insertVoters([id, fullName, boxNumber, address, serialBoxNumber]);

}
