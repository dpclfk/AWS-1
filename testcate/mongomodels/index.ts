import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";

// const client = new MongoClient(url);
// connectToMongoDB = async () => {
//   try {
//     console.log();
//     await client.connect(); // 몽고DB 서버에 연결
//     console.log("Connected Mongo@@@@");
//   } catch (error) {
//     console.error("connectERR @@@@@@", error);
//   }
// };

// module.exports connectToMongoDB();

let connectDB: Promise<MongoClient>;

connectDB = new MongoClient(url).connect();

let testdb = new MongoClient(url).db("teamhamster");

export { testdb };
