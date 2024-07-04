// import { Model, ModelStatic, Sequelize } from "sequelize";
// import mySQLConfig from "../../config/config.json" assert { type: "json" };

// import BoardModel from "./board/Board.ts";

// const env = process.env.NODE_ENV || "development";
// const config = mySQLConfig[env];

// export const sequelize: Sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

// export const Board: ModelStatic<Model<any, any>> = BoardModel.init(sequelize);

// const db = { Board };

// Object.keys(db).forEach((model) => {
//   db[model].associate(db);
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export { Sequelize };

// export default db;

import { Sequelize, Options } from "sequelize";
import mysqlConfig from "../../config/mysql.json";
import Todo from "./Todo";

const config: Options = mysqlConfig.development as Options;

export const sequelize = new Sequelize(config);
Todo.initialize(sequelize);

export { Todo };
