//모델 생성 파일
const { sequelize } = require("./connection");
const User = require("./user");

const db = {};

db.sequelize = sequelize;
//모델 생성
db.User = User;

//모델 초기화

// model init
Object.keys(db).forEach((modelName) => {
  if (db[modelName].init) {
    db[modelName].init(sequelize);
  }
});

// 관계설정 자동 코드
// ['Department', 'User','..']
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
