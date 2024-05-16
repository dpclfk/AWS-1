import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "http://127.0.0.1:5500" },
});
// 지금같은 채팅은 io가 주체로 들어감

app.use(express.static("public"));

io.on("connection", (client) => {
  console.log("client connected");

  client.on("disconnect", () => {
    console.log("client disconnect");
  });

  client.on("chat", (data) => {
    console.log(data);
    io.emit("chat", data);
  });
});

server.listen(8080, () => {
  console.log(8080, "server open");
});
