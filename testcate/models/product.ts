import { DataTypes, Model, Sequelize } from "sequelize";
import CategoryTest from "./Category";

type Constructor<T> = new (...args: any[]) => T;

class producttest extends Model {
  public readonly id!: number;
  public name!: string;
  public categoryId!: number;
  public title!: number;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;
  public readonly deletedAt!: Date;
  addChildren: any;

  public static initialize(sequelize: Sequelize) {
    producttest.init(
      {
        title: {
          type: DataTypes.STRING(100),
        },
        // categoryId: {
        //   type: DataTypes.INTEGER,
        // },
      },
      {
        sequelize,
        modelName: "Producttest",
        tableName: "producttest",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  }
  static associate({}: {}) {
    // productTest.hasMany(productTest, {
    //   foreignKey: "ProductId",
    //   onDelete: "cascade",
    // });
    producttest.belongsTo(CategoryTest, {
      // as: "productTest",
      foreignKey: "categoryId",
    });
  }
}

export default producttest;
