import express, { Express } from "express";

import router from "./controllers";
import { sequelize } from "./models";

// import { MongoClient } from "mongodb";
// const url = "mongodb://localhost:27017";

// import { testdb } from "./mongomodels";

const app: Express = express();

app.set("port", process.env.PORT || 3000);
sequelize.sync({ force: true });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// try {
//   const collection = testdb.collection("test");
//   collection.insertOne({ name: "asdzvzvza", age: 30 });
// } catch (err) {
//   console.error("connectERR @@@@@@", err);
// }

app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
