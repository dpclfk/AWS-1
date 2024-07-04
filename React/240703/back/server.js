import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import router from "./controllers/index.js";

import { sequelize, Board } from "./models/index.js";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: [/localhost\:?\d*/, /127.0.0.1\:?\d*/], credentials: true }));

app.use(router);

try {
  await sequelize.sync(false);
} catch (err) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port server open");
});
