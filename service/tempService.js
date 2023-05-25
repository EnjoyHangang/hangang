const logger = require("../lib/logger");
const tempDao = require("../dao/tempDao");

const service = {
  async reg(params) {
    let inserted = null;

    try {
      inserted = await tempDao.insert(params);
      logger.debug(`(tempService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(tempService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  async list(params) {
    let result = null;

    try {
      result = await tempDao.selectList(params);
      logger.debug(`(tempService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(tempService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  async info(params) {
    let result = null;

    try {
      result = await tempDao.selectInfo(params);
      logger.debug(`(tempService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(tempService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
