const dbConnection = require('../dbConnection');

const addUsersToDB = (arrayOFPropertiesToAdd) => {
  const queryString = 'INSERT INTO users (id, full_name, user_name, password, telephone, email, type) VALUES($1,$2,$3,$4,$5,$6,$7)';
  dbConnection.query(queryString, arrayOFPropertiesToAdd, (err) => {
    if (err) {
      console.log(err);
    } else {
      // this is just for check - will be removed later
      console.log('success');
    }
  });
};

module.exports = addUsersToDB;
