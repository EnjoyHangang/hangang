const { User } = require("../models/index");

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params) //.create = Sequelize ORM메서드(User테이블을 사용)
        .then((inserted) => {
          resolve(inserted); //성공시 inserted라는 레코드생성 생성
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  //user 조회
  selectList(params) {
    const SetQuery = {}; // 쿼리 설정(객체)
    if (params.name) {
      //등록되어있는 params.name에있다면
      SetQuery.where = {
        //(객체형태)로 찾아라
        ...SetQuery.where,
        name: { [Op.like]: `%${params.name}%` }, //Op.like: 찾아주는 sequlize 메서드 %문자열을포함하는값과 일치하는것%
      };
    }

    SetQuery.order = [["id", "DESC"]];
    //.order 정렬해라
    return new Promise((resolve, reject) => {
      User.findAndCountAll({
        //.findAndCountAll 요소를 검색하고  해당 데이터와 갯수를 반환
        ...SetQuery,
      })
        .then((selectedList) => {
          resolve(selectedList);
          //성공시 selectedList 반환
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
