const router = require("express").Router();

const sessions = {};

router.get("/set", (req, res) => {
  const id = Date.now();
  res.cookie("user", id, { signed: true });
  sessions[id] = 1;
  res.send("setting session");
});

router.get("/get", (req, res) => {
  console.log(req.signedCookies.user);
  res.send({ user: sessions[req.signedCookies.user] });
});

module.exports = router;
