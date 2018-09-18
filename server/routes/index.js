const express = require('express');
const path = require('path');

const router = express.Router();
// const userOnBoxRouter = require('./userOnBox');

// router.use('/useronbox', userOnBoxRouter);

router.post('/login', (req, res) => {
  console.log(req.body);
});

if (process.env.NODE_ENV === 'production') {
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client/build/index.html'));
  });
} else {
  router.get('*', (req, res) => {
    res.send('server is working (dev mode)');
  });
}
module.exports = router;
