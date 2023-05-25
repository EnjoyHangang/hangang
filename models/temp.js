const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
        },
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
    db.Comment.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        onDelete: "SET NULL",
        as: "User",
      },
    });
  }
};
