const express = require('express');
const getVotersFromDB = require('../helpers/getVotersHelper');

const router = express.Router();

router.get('/useronbox/voter/:input', (req, res) => {
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

router.get('/useronbox/votersnumber/:boxnumber', (req, res) => {
  // will be defined when merging PR n.#74
  getNumberOfVotersInBox(req.params.boxnumber, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.json(result);
    }
  });
});

router.get('/useronbox/votednumber/:boxnumber', (req, res) => {
  // will be defined when merging PR n.#75
  getNumberOfVotedByBox(req.params.boxnumber, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.json(result);
    }
  });
});
