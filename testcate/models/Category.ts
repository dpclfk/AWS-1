import { DataTypes, Model, Sequelize } from "sequelize";
import producttest from "./product";

type Constructor<T> = new (...args: any[]) => T;

// interface ICategory {
//   readonly id: number;
//   name: string;
//   categoryId: number;
//   readonly createdAt: Date;
//   readonly updateAt: Date;
//   readonly deletedAt: Date;
//   addChildren: any;
// }
// implements ICategory
class CategoryTest extends Model {
  public readonly id!: number;
  public name!: string;
  public categoryId!: number;
  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
  public readonly deletedAt!: Date;
  addChildren: any;

  public static initialize(sequelize: Sequelize) {
    CategoryTest.init(
      {
        name: {
          type: DataTypes.STRING(100),
        },
        categoryId: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "CategoryTest",
        tableName: "category_test",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  }
  static associate({}: {}) {
    CategoryTest.hasMany(CategoryTest, {
      as: "children",
      foreignKey: "preCateId",
      onDelete: "cascade",
    });
    CategoryTest.belongsTo(CategoryTest, {
      as: "parent",
      foreignKey: "preCateId",
    });
    CategoryTest.hasMany(producttest, {
      as: "Producttest",
      foreignKey: "categoryId",
      onDelete: "cascade",
    });
  }
}

export default CategoryTest;
