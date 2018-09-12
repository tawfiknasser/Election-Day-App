const express = require('express');
const path = require('path');

const router = express.Router();
const voters = require('../model/voters');
/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client/build/index.html'));
});
router.get('/voters', (req, res) => {
  res.json(voters);
});

module.exports = router;
