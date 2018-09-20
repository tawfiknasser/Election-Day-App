const express = require("express");
const path = require("path");
const updateVoterStatus = require("../database/queries/updateVoterStatus");
const loginHandler = require("../helpers/loginHelper");

const router = express.Router();

router.post("/login", loginHandler);

if (process.env.NODE_ENV === "production") {
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client/build/index.html"));
  });
} else {
  router.get("*", (req, res) => {
    res.send("server is working (dev mode)");
  });
}
module.exports = router;
