const express = require("express");
const path = require("path");
const updateVoterStatus = require("../database/queries/updateVoterStatus");
const loginHandler = require("../helpers/loginHelper");
const verify = require("../helpers/verify");
const router = express.Router();


router.post("/login", loginHandler);

router.post("/verify",verify,(req,res)=>{
  res.json({status:true,
            box:req.decoded.box});
});



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
