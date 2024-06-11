const express = require("express");
const MyRouter = require("./MyRouter");

const app = express();

const user = new MyRouter("/user");
user.init(app);
user.setCallbacks({
  login: (req, res) => {
    res.send("login");
  },
  regist: (req, res) => {
    res.send("regist");
  },
  logout: (req, res) => {
    res.send("logout");
  },
});

const board = new MyRouter("/board");
board.init(app);
board.setCallbacks({
  create: (req, res) => {
    res.send("login");
  },
  list: (req, res) => {
    res.send("regist");
  },
  item: (req, res) => {
    res.send("logout");
  },
});

app.listen(3000, () => {
  console.log(3000, "server open");
});
