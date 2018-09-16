const express = require("express");

const router = express.Router();
const voters = require("../model/voters");
/* GET home page. */
router.get("/", (req, res) => {
  res.send("helloww");
});
router.get("/voters", (req, res) => {
  res.json(voters);
});
router.post("/login", (req, res) => {
  console.log(req.body);
});

module.exports = router;
