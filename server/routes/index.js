const express = require('express');
const updateVoterStatus = require('../database/queries/updateVoterStatus');

const router = express.Router();
const voters = require('../model/voters');
/* GET home page. */
router.get('/', (req, res) => {
  res.send('helloww');
});
router.get('/voters', (req, res) => {
  res.json(voters);
});
router.get('/idVoter/:id/status/:status', (req, res) => {
  // UpdateStatus
  updateVoterStatus(req.params.id, req.params.status, (req, res) => {
    // cb to handle errors
  });
});

module.exports = router;
