const superagent = require("superagent");
const logger = require("../lib/logger");
const dotenv = require("dotenv");

dotenv.config();

const tempDataConfig = {
  url: process.env.API_URL,
  key: process.env.API_KEY,
};

const tempUtil = {
  async getData(params) {
    let response = null;
    let result = {};
    try {
      response = await superagent.get(tempDataConfig.url).query({
        KEY: tempDataConfig.key,
        START_INDEX: params.START_INDEX,
        END_INDEX: params.END_INDEX,
        TYPE: params.TYPE,
        MSR_DATE: params.MSR_DATE,
        MSR_TIME: params.MSR_TIME,
        SITE_ID: params.SITE_ID,
        W_TEMP: params.W_TEMP,
      });
      const tempData = JSON.parse(response.text).response?.body?.items?.item;
      console.log(tempData);
      tempData.forEach((v) => {
        if (result[v.category] !== undefined) {
          result[v.category].push(v);
        } else {
          result[v.category] = [v];
        }
      });
      logger.debug(`(tempUtil.getData)-${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(tempUtil.getData)-${err.toString()}`);
    }
    return result;
  },
};

module.exports = tempUtil;
