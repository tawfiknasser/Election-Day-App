// importing xlsx file as an array
// loop over the array imported
// take the relevant data to a single user
// run query of inserting user with the data

const importXlsxFile = require('./importXlsxFile');
const insertUsers = require('../server/database/queries/insertUsers');

const path = process.argv[2];
// get data from the external file to an array
const usersList = importXlsxFile(path);

let id;
let fullName;
let userName;
let password;
let telephone;
let email;
let type;
// run on the array (where each row contains the data of one voter) and get all the relevant data
usersList.forEach((row, index) => {
  // first row is names of the columns in the xlsx file and should be ignored
  if (index === 0) {
    return;
  }
  id = row[0];
  fullName = row[1].trim();
  userName = row[2].trim();
  password = row[3].trim();
  telephone = row[4];
  email = row[5].trim();
  type = row[6].trim();
  insertUsers([id, fullName, userName, password, telephone, email, type]);
});
