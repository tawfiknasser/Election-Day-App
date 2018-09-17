const express = require('express');
const path = require('path');
const getVotersFromDB = require('../helpers/getVotersHelper');

const router = express.Router();
// const voters = require('../model/voters');
/* GET home page. */

router.get('/voter/:input', (req, res) => {
  // TODO change the 10 parameter passed to getVotersFromDB function.
  // It should be accquired from the coockie once its set
  getVotersFromDB(req.params.input, 10, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.json(result.rows);
    }
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
