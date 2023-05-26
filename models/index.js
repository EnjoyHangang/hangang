//모델 생성 파일
const { sequelize } = require("./connection");
const User = require("./user");

const db = {};

db.sequelize = sequelize;
//모델 생성
db.User = User;

//모델 초기화
User.init(sequelize);

module.exports = db;
