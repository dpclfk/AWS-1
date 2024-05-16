const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const router = require("./router");

const app = express();

app.use(cookieParser("test"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Store : 저장공간
// app.use(
//   session({
//     resave: true,
//     saveUninitialized: true,
//     secret: "test",
//     name: "user-session", // 쿠키 이름으로 들어감
//     store: new FileStore({
//       reapInterval: 10,
//       path: "./test-session",
//     }),
//     cookie: {
//       maxAge: 5 * 1000,
//     },
//   })
// );

app.use(router);

app.listen(3000, () => {
  console.log(3000, "server open");
});
