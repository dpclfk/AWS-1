const express = require("./lib/express");
const path = require("path");

const app = express();

const boardRoot = path.join(__dirname, "..", "board");

app.get("/", (req, res) => {
  res.end("이건 한글 가능");
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

app.listen(3001, () => {
  console.log("express server open of 3001 port");
});
