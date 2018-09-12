// This should be called only after the DB initial setup

const xlsx = require('node-xlsx').default;
// function to get names from xlsx file
// into array of arrays
// where each array resembles a row (data for one voter) in the xlsx file
const workSheetsFromFile = (path) => {
  const arrayOfrows = xlsx.parse(path);

  // rows of voters:
  // the first row is the names of the columns and
  // the last row is an empty row which should be ignored as well
  const voters = arrayOfrows[0].data;
  return voters;
};

module.exports = workSheetsFromFile;
