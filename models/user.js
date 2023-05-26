//user db생성

const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(15),
        },
        userid: {
          type: Sequelize.STRING(20),
          unique: true, //고유한 값인가?
          allowNull: false, //Null을 허용하는가?
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize, //시퀄라이즈 적용
        underscored: true, //자바스크립 라이브러리 허용
        timestamps: true, // 테이블생성시 createdAt
        paranoid: true, //레코드 삭제시 deleted At컬럼에 시간추가(timestamps 의 영향을 받음)
      }
    );
  }

  // static associate(db) {
  //   db.User.hasMany(db.Temp, {
  //     foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'Temp' },
  //   });
  // }
};
