// 수정 필요

const { Op } = require("sequelize");
const { User, Temp } = require("../models/index");

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Temp.create(params)
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: params.userId,
      };
    }
    if (params.time) {
      setQuery.where = {
        ...setQuery.where,
        time: params.time,
      };
    }
    setQuery.order = [["id", "DESC"]];
    return new Promise((resolve, reject) => {
      Temp.findAndCountAll({
        ...setQuery,
        include: [
          {
            model: User,
            as: "User",
            attributes: ["userId"],
          },
        ],
      })
        .then((selectedList) => {
          resolve(selectedList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      Temp.findByPk(params.id, {
        include: [
          {
            model: User,
            as: "User",
          },
        ],
      })
        .then((selectedInfo) => {
          if (!selectedInfo) {
            resolve(null);
          } else {
            resolve(selectedInfo);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
