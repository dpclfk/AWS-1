const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          // field: "user_id", // 컬럼명을 지정할 수 있다
          type: Sequelize.STRING(10),
          allowNull: false, // default : true
          unique: true,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false, // default : true
          // unique: true
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false, // default : true
        },
        age: {
          type: Sequelize.TINYINT.UNSIGNED,
        },
      },
      {
        sequelize,
        modelName: "User", // Sequqlize가 이해하는 Table 이름(모델명)
        tableName: "user", // DB에서의 Table 이름
        underscored: true,
      }
    );
  }
  // static associate(db) {
  //   db.User.hasMany(db.Board);
  // }
  static associate(db) {
    db.User.hasMany(db.Board, {
      sourceKey: "userId",
      foreignKey: "userId",
      // foreignKey: { name: "userId", allowNull: false },
      onDelete: "cascade",
    });
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "followerId", // column 명
      as: "follower", //sequelize가 사용하는 별칭
      sourceKey: "userId",
    });
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "followingId", // column 명
      as: "following",
      sourceKey: "userId",
    });
  }
};
