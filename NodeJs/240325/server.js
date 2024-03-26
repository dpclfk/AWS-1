const net = require("net");
const fs = require("fs");

const { makeReq } = require("./lib/req");
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

let count = 1;

const users = [
  // page * 4 <= index < (page + 1) * 4
  { id: count++, pw: "test1", name: "test1" },
  { id: count++, pw: "test2", name: "test2" },
  { id: count++, pw: "test3", name: "test3" },
  { id: count++, pw: "test4", name: "test4" },

  { id: "test5", pw: "test5", name: "test5" },
  { id: "test6", pw: "test6", name: "test6" },
  { id: "test7", pw: "test7", name: "test7" },
  { id: "test8", pw: "test8", name: "test8" },

  { id: "test9", pw: "test9", name: "test9" },
  { id: "test10", pw: "test10", name: "test10" },
  { id: "test11", pw: "test11", name: "test11" },
  { id: "test12", pw: "test12", name: "test12" },

  { id: "test13", pw: "test13", name: "test13" },
];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";

  if (method == "GET") {
    if (static[path] != undefined) {
      const body = fs.readFileSync(static[path]);
      if (static[path].indexOf(".js") > 0) {
        message = makeResponse("text/javascript", body);
      } else if (static[path].indexOf(".css") > 0) {
        message = makeResponse("text/css", body);
      } else if (static[path].indexOf(".png") > 0) {
        message = sendFile("image/png", body);
      } else {
        message = makeResponse("text/html", body);
      }
    }
  } else if (method == "POST") {
    if (path == "/") {
      console.log(body.page);
      //http://localhost:3000/POST
      //POST / HTTP/1.1
      message = makeResponse(
        "application/json",
        JSON.stringify(
          users
            .slice((body.page - 1) * body.count, body.page * body.count)
            .map((item, idx) => ({ id: item.id, idx }))
        )
      );
    } else if (path == "/write") {
      message = redirect();
    }
  }

  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);

    client.write(getMessage(req));
    client.end();
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
