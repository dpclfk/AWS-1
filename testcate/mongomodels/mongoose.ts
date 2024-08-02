/// 몽고DB 스키마관련
import mongoose, { Schema } from "mongoose";

const url = "mongodb://localhost:27017";

const testschema = new Schema(
  {
    name: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

// export { testschema };

///

/// 몽고 DB 연결관련
mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("mongoose connection");
});

// mongoose.connection.dropCollection("teamhamsters");
// 이건 컬렉션(mysql로 치면 테이블)삭제

///

const mongoosetest = mongoose.model("teamhamsters", testschema);

export { mongoosetest };

// let connectDB: Promise<Mongoose>;

// connectDB = Mongoose.connect(url);

// Mongoose.connection.on((),=>{})

// let testmogs = new Mongoose(url).db("teamhamster");

// export { testmogs };
