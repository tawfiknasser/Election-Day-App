const jwt = require('jsonwebtoken');

const { secret } = process.env;
require('env2')('./config.env');

module.exports = (req, res, next) => {
  console.log('erer');
  console.log(req.cookies);
  const cookie = req.cookies['election-app'];
  console.log('wewe', cookie);
  if (cookie) {
    jwt.verify(cookie, secret, (err, decoded) => {
      if (err || !decoded) {
        console.log('this ended in verify');
        console.log(err);

        res.status(200).json({ status: false });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    console.log('oneone');
    res.status(200).json({ status: false });
  }
};
