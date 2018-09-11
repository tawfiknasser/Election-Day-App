const fs = require('fs');
const dbConnection = require('./dbConnection');

const makeEmptyTables = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');

const runDbBuild = () => dbConnection.query(makeEmptyTables, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Success');
  }
});

module.exports = runDbBuild;
