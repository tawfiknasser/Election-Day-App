const db_Connection = require('../server/database/dbConnection');
const { hashPassword } = require('../server/helpers/hashHelper');

const usernmae = process.argv[2];
const password = process.argv[3];
const id = process.argv[4];
hashPassword(password, (hashingError, hashedPassword) => {
  if (hashingError) {
    throw hashingError; // only runs in terminal
  } else {
    db_Connection.query(
      'insert into users (id,full_name,user_name,password,telephone,email,type) values ($1,$2,$3,$4,$5,$6,$7)',
      [id, usernmae, usernmae, hashedPassword, 242345, 'erge@j.com', 'B'],
      (dbError) => {
        if (dbError) {
          throw dbError; // only runs in terminal
        }
      },
    );
  }
});
