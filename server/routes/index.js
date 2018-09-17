const express = require('express');

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
  console.log(req.params.status);
});
// router.get('/hii', (req, res) => {
//   console.log('hi router');
// });
module.exports = router;
