const logger = require("../lib/logger");
const tempDao = require("../dao/tempDao");

const service = {
  async reg(params) {
    try {
      const inserted = await tempDao.insert(params);
      logger.debug(`(tempService.reg) ${JSON.stringify(inserted)}`);
      return inserted;
    } catch (err) {
      logger.error(`(tempService.reg) ${err.toString()}`);
      throw err;
    }
  },
  async list(params) {
    try {
      const result = await tempDao.selectList(params);
      logger.debug(`(tempService.list) ${JSON.stringify(result)}`);
      return result;
    } catch (err) {
      logger.error(`(tempService.list) ${err.toString()}`);
      throw err;
    }
  },
  async info(params) {
    try {
      const result = await tempDao.selectInfo(params);
      logger.debug(`(tempService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(tempService.info) ${err.toString()}`);
      throw err;
    }
  },
};

module.exports = service;
