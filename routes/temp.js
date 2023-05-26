const express = require("express");

const router = express.Router();
const logger = require("../lib/logger");
const getData = require("../lib/tempUtil");

// 한강 api 호출
router.get("/datas", async (req, res) => {
  try {
    const result = await getData();

    logger.info(`(weather.get.result) ${JSON.stringify(result)}`);
    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
