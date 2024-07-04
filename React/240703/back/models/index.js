import { Sequelize } from "sequelize";
import mySQLConfig from "../config/config.json" assert { type: "json" };

import BoardModel from "./board/Board.js";

const env = process.env.NODE_ENV || "development";
const config = mySQLConfig[env];

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

export const Board = BoardModel.init(sequelize);

const db = { Board };

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { Sequelize };

export default db;
