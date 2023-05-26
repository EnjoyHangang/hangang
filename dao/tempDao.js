// 수정 필요

const { Op } = require("sequelize");
const { User, Temp } = require("../models/index");

const dao = {
  async insert(params) {
    try {
      const inserted = await Temp.create(params);
      return inserted;
    } catch (err) {
      throw err;
    }
  },
  async selectList(params) {
    try {
      const query = {
        order: [["id", "DESC"]],
        include: [
          {
            model: User,
            as: "User",
            attributes: ["userId"],
          },
        ],
      };
      if (params.userId) {
        query.where = { userId: params.userId };
      }
      if (params.time) {
        query.where = { ...query.where, time: params.time };
      }
      const selectedList = await Temp.findAndCountAll(query);
      return selectedList;
    } catch (err) {
      throw err;
    }
  },
  async selectInfo(params) {
    try {
      const selectedInfo = await Temp.findByPk(params.id, {
        include: [
          {
            model: User,
            as: "User",
          },
        ],
      });
      if (!selectedInfo) {
        return null;
      }
      return selectedInfo;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = dao;
