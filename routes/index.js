const express = require("express");
const logger = require("../lib/logger");
const userRouter = require("./user");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//라우터 등록
router.use("/users", userRouter);

module.exports = router;
