const express = require("express");
const router = express.Router();
const tempRouter = require('./temp');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hangang" });
});

router.use('/temps', tempRouter);

module.exports = router;
