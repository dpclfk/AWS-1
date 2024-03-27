const express = require("express");
// const http = require("http");

const app = express(); // net.createdServer() << 매개변수가 없음
// const server = http.createServer((req, res) => {
//   res.end("now testing http create Server");
// });

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.path);
  console.log(req.query); //Querystring
  console.log(req.body);

  res.end("now testing express server");
});

app.get("/text", (req, res) => {
  res.end("now testing express server");
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port, ip, callbackFn)

// server.listen(3080, () => {
//   console.log("http server open of 3080 port");
// });
