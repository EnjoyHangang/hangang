const express = require("express");

const router = express.Router();
const logger = require("../lib/logger");
const tempUtil = require("../lib/tempUtil");
const { isLoggedIn } = require("../lib/middleware");
const { validateParams } = require("../lib/validation");

// 등록
router.post("/", isLoggedIn, async (req, res) => {
  try {
    const params = {
      START_INDEX: parseInt(req.body.START_INDEX),
      END_INDEX: parseInt(req.body.END_INDEX),
      TYPE: req.body.TYPE,
      MSR_DATE: req.body.MSR_DATE,
      MSR_TIME: req.body.MSR_TIME,
      SITE_ID: req.body.SITE_ID,
      W_TEMP: req.body.W_TEMP,
    };
    logger.info(`(temp.reg.params) ${JSON.stringify(params)}`);

    const validationSchema = {
      START_INDEX: { type: "integer", required: true },
      END_INDEX: { type: "integer", required: true },
      TYPE: { type: "string", required: true },
      MSR_DATE: { type: "date", required: true },
      MSR_TIME: { type: "time", required: true },
      SITE_ID: { type: "string", required: true },
      W_TEMP: { type: "integer", required: true },
    };

    const errors = validateParams(params, validationSchema);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // 비즈니스 로직 호출
    const result = await tempUtil.getData(params);
    logger.info(`(temp.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    logger.error(`(temp.reg.error) ${err.toString()}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
