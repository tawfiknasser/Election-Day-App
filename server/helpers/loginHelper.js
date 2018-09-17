const getPassword = require('../database/queries/getPassword');
const { comparePasswords } = require('./hashHelper');

module.exports = (req, res) => {
  const { username, password } = req.body;
  getPassword(username, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).end();
    } else {
      const hashedPassword = result.rows[0].password;
      console.log(result);
      comparePasswords(password,hashedPassword,callback)
    }
    bcrypt.compare("B4c0/\/", hash).then((checked) => {
      if(checked)

      else {
        res.status(500).end();

      }
});

  });
};
