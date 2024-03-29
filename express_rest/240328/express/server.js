const express = require("express");
const path = require("path");

const app = express();

const boardRoot = path.join(__dirname, "..", "board");

// Middleware app.use로 로그인같은것을 만들수있음
// app.get도 미들웨어
// use는 메서드와 관계없이 path만 맞으면 실행시킴

// app.use((req, res, next) => {
//   // Rest API의 method 모두 대응
//   console.log("middleware");
//   // res.send("이건 한글 가능"); // <<exppess에서는 이렇게 쓰지 말라고 한다
//   next();
// });

// app.all() //use랑 같은 놈 << send, sendFile등 데이터를 응답하기위해 사용한다

// app.get("/board", (req, res, next) => {
//   console.log("board middleware");
//   next();
// });

app.get("/", (req, res) => {
  res.send("이건 한글 가능");
});

app.get("/board", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.get("/test", (req, res, next) => {
  req.test = {};
  next();
});

app.get("/test", (req, res, next) => {
  req.test.a = 1;
  next();
});

app.get("/test", (req, res, next) => {
  req.test.b = "테스트중";
  next();
});

app.post("/test", (req, res) => {
  res.json(req.test);
});

app.all("/*", (req, res) => {
  res.send("구현 사항 없음");
}); //use랑 같은 놈 << send, sendFile등 데이터를 응답하기위해 사용한다
// 다 하고 매칭되는게 없을때 사용됨

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});
