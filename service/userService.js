const logger = require("../lib/logger");

const userDao = require("../dao/userDao");

const service = {
  async reg(params) {
    let inserted = null;

    try {
      inserted = await userDao.insert(params); //userDaO에서 inserted호출
      logger.debug(`(userService.reg)${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(userService.reg)${err.toString()}`);
      return new Promise((reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(inserted); //성공시 inserted반환
    });
  },
  //user 조회 리스트
  async list(params) {
    let result = null;

    try {
      result = await userDao.selectList(params); //Dao에서 가져와서 사용
      logger.debug(`(userService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.list) ${err.toString()}`);

      return new Promise((reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
};
module.exports = service;
