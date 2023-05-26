const Sequelize = require("sequelize");

module.exports = class Temp extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        temp: {
          type: Sequelize.INTEGER,
        },
        time: {
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    db.Temp.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        onDelete: "SET NULL",
        as: "User",
      },
    });
  }
};
