// 수정 필요

const { Op } = require("sequelize");
const { User } = require("../models/index");

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params)
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
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: { [Op.like]: `%${params.id}%` }, // like검색
      };
    }
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: params.userId, // like검색
      };
    }
    setQuery.order = [["id", "DESC"]];
    return new Promise((resolve, reject) => {
      User.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ["content"] },
        include: [
          {
            model: Post,
            as: "Post",
            attributes: ["userId", "title"],
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
      // Post.findAll
      User.findByPk(params.id, {
        include: [
          {
            model: Post,
            as: "Post",
          },
        ],
      })
        .then((selectedInfo) => {
          resolve(selectedInfo);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
