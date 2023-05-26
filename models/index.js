const { sequelize } = require('./connection');
const User = require('./user');

const db = {};

db.sequelize = sequelize;
db.User = User;

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
