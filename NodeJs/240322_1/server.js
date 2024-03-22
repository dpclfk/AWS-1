const net = require("net");

let inter;

const server = net.createServer((client) => {
  client.on("data", (data) => {
    console.log(data.toString() + "에 요청을 받았어");
    inter = setInterval(() => {
      const now = new Date().toString();
      console.log(now + "에 요청을 보냈어");
      client.write(now);
    }, 1000);
    // client.write(data.toString() + "를 받았어");
    // client.end();
  });

  client.on("error", (err) => {
    console.error(err);
  });

  client.on("close", () => {
    console.log("client 연결 종료");
    clearInterval(inter);
    server.close();
  });
});

server.on("connection", () => {
  console.log("어떤 연결이 생겼어");
});

server.on("close", () => {
  console.log("server 연결 종료");
});

server.on("error", (err) => {
  console.error(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
