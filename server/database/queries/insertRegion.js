const dbConnection = require('../dbConnection');

const addRegionsToDB = (nameOfRegion) => {
  const queryString = 'INSERT INTO region (name ) VALUES($1)';
  dbConnection.query(queryString, [nameOfRegion], (err) => {
    if (err) {
      console.log(err);
    } else {
      // this is just for check - remove else before push
      console.log('success');
    }
  });
};

module.exports = addRegionsToDB;
