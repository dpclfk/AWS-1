const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserTest extends Model {
    static init() {
      return super.init(
        {
          name: {
            type: DataTypes.STRING(10),
          },
          address: {
            type: DataTypes.STRING(10),
          },
        },
        {
          sequelize,
          modelName: "UserTest",
          tableName: "user_test",
          paranoid: true,
          underscored: true,
        }
      );
    }

    static associate(db) {
      db.UserTest.belongsTo(db.UserInfo, {
        foreignKey: "teid",
        targetKey: "id",
      });
    }
  }
  return UserTest.init();
};
