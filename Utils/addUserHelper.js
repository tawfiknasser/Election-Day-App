const db_Connection = require('../server/database/dbConnection');
const { hashPassword } = require('../server/helpers/hashHelper');

const usernmae = process.argv[2];
const password = process.argv[3];
const id = process.argv[4];
hashPassword(password, (error, hashedPassword) => {
  if (error) {
    console.log('error', error);
  } else {
    db_Connection.query(
      'insert into users (id,full_name,user_name,password,telephone,email,type) values ($1,$2,$3,$4,$5,$6,$7)',
      [id, usernmae, usernmae, hashedPassword, 242345, 'erge@j.com', 'B'],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success user added', result);
        }
      },
    );
  }
});
