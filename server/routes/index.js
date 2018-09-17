const express = require('express');
const updateVoterStatus = require('../database/queries/updateVoterStatus');
const path = require('path');
const router = express.Router();
const voters = require('../model/voters');
/* GET home page. */

router.get('/voters', (req, res) => {
  res.json(voters);
});
router.get('/idVoter/:id/status/:status', (req, res) => {
  // UpdateStatus
  updateVoterStatus(req.params.id, req.params.status, (err) => {
    // cb to handle errors
    err ? res.status(500).end() : res.status(200).end();
  });
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
