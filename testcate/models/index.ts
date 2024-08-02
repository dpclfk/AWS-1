// import { Sequelize } from "sequelize";
// import mySQLConfig from "../config/config.json" assert { type: "json" };

// import CategoryModel from "./Category.js";

// const env = process.env.NODE_ENV || "development";
// const config = mySQLConfig[env];

// export const sequelize = new Sequelize(config.database, config.username, config.password, config);

// export const Category = CategoryModel.init(sequelize);

// const db = { Category };

// Object.keys(db).forEach((model) => {
//   db[model].associate(db);
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export { Sequelize };

// export default db;

import { Sequelize, Options } from "sequelize";
import mysqlConfig from "../config/config.json";
import CategoryTest from "./Category";
import producttest from "./product";

const config: Options = mysqlConfig.development as Options;

export const sequelize = new Sequelize(config);
CategoryTest.initialize(sequelize);
producttest.initialize(sequelize);
CategoryTest.associate({ CategoryTest, producttest });
// productTest.associate({ CategoryTest });

export { CategoryTest, producttest };
