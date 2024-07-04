import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router";
import { sequelize } from "./models";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);
sequelize.sync({ force: false });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/imgs", express.static("../uploads"));

app.use("/api", router);

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "port server open");
});
