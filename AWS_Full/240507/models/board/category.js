import { Model, DataTypes } from "sequelize";

export default class Category extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
        href: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        authLevel: {
          type: DataTypes.TINYINT,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "category",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Board, Category }) {
    Category.hasMany(Category, { as: "children", foreignKey: "cateogryId" });
    Category.hasMany(Board);
    Category.belongsTo(Category, { as: "parent", foreignKey: "cateogryId" });
  }
}
