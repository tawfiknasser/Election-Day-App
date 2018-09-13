const express = require('express');
const path = require('path');

const router = express.Router();
const voters = require('../model/voters');
/* GET home page. */

router.get('/voters', (req, res) => {
  res.json(voters);
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
