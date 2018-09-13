const dbConnection = require('../dbConnection');

const addBoxesToDB = (arrayOFPropertiesToAdd) => {
  const queryString = 'INSERT INTO box (id,name,user_on_box,number_of_voters,region) VALUES($1,$2,$3,$4,$5)';
  dbConnection.query(queryString, arrayOFPropertiesToAdd, (err) => {
    if (err) {
      console.log(err);
    } else {
      // this is just for check - will be removed later
      console.log('success');
    }
  });
};

module.exports = addBoxesToDB;
