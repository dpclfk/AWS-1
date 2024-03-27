const express = require("express");

const app = express();

app.use(express.static("views"));

app.get("/board", (req, res) => {
  console.log(req.headers);
  res.json("test");
});

app.listen(3000, () => {
  console.log("server open of 3000 port");
});
