const router = require("express").Router();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

router.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "test",
    name: "board-session", // 쿠키 이름으로 들어감
    store: new FileStore({
      reapInterval: 10,
      path: "./board-session",
    }),
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

router.get("/set", (req, res) => {
  req.session.user = 1;
  console.log(req.session.id);
  res.send("setting session");
});

router.get("/get", (req, res) => {
  res.send({ user: req.session.user });
});

module.exports = router;
