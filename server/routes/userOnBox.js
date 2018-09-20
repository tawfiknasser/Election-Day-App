const express = require("express");
const getVotersFromDB = require("../helpers/getVotersHelper");
const updateVoterStatus = require("../database/queries/updateVoterStatus");
const getNumberOfVotersInBox = require("../database/queries/getNumberOfVotersInBox");
const getNumberOfVotedByBox = require("../database/queries/getNumberOfVotedByBox");

const router = express.Router();

router.get("/idVoter/:id/status/:status", (req, res) => {
  // UpdateStatus

  updateVoterStatus(req.params.id, req.params.status, err => {
    // cb to handle errors
    err ? res.status(500).end() : res.status(200).end();
  });
});
router.get("/voter/:input", (req, res) => {
  getVotersFromDB(req.params.input, 10, (error, result) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(result.rows);
    }
  });
});

router.get("/votersnumber/:boxnumber", (req, res) => {
  getNumberOfVotersInBox(req.params.boxnumber, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.json(result.rows[0].count);
    }
  });
});

router.get("/votednumber/:boxnumber", (req, res) => {
  getNumberOfVotedByBox(req.params.boxnumber, (error, result) => {
    if (error) {
      res.status(500).end();
    } else {
      res.json(result.rows[0].count);
    }
  });
});

module.exports = router;
