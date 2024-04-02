const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config(); //dotenv 파일을 읽어서 넣어줌

// console.log(process.env["PORT"]);

const app = express();

const boards = [
  {
    id: 1,
    title: "토요일 보충",
    createdAt: "2024-03-30",
    text: "오늘 점심",
    like: 0,
    view: 0,
  },
  {
    id: 2,
    title: "토요일 보충2",
    createdAt: "2024-03-30",
    text: "오늘 점심2",
    like: 0,
    view: 1,
  },
];

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
// body parser
// 메서드 호출할 때 객체가 들어간다? << 옵션
// extended : 확장
//       - true | false
//       - true : 외부 라이브러리를 사용하여 작동한다. (qs library)
//       - false : Express가 갖고있는 body parser로 작동한다.(querystring module)
// querystring을 파싱해준다? << form => Content-Type: x-www-form-form-urlencoded

app.use(express.json());
// Const-Type : application/json

// app.use(express.static("public"));
app.use("/", express.static("public"));
app.use("/imgs", express.static("uploads"));

app.get("/board", (req, res) => {
  console.log("board 폴더는 없다.");
  // console.log(req.hostname);
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/", (req, res) => {
  console.log("/ 폴더는 없다.");
  // console.log(req.hostname);
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "포트로 서버를 열었어");
});
