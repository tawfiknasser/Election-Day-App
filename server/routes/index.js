const express = require('express');
const loginHandler = require('./loginHandler');

const router = express.Router();
const voters = require('../model/voters');
/* GET home page. */
router.get('/', (req, res) => {
  res.send('helloww');
});
router.get('/voters', (req, res) => {
  res.json(voters);
});
router.post('/login', loginHandler);

module.exports = router;
