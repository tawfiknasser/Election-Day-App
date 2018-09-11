const express = require('express');
const router = express.Router();
const voters = require('../model/voters')
/* GET home page. */
router.get('/', (req, res, next)=> {

  res.send("helloww");
});
router.get('/voters', (req, res, next)=> {
   console.log("hererere");
  res.json(voters);
});

module.exports = router;
