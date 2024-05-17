import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://127.0.0.1:5500", "http://127.0.0.1:8080"] },
}); // url의 host
// 지금같은 채팅은 io가 주체로 들어감
// path(router) => socket : namespace
// 패스를 소켓쪽에서 네임스페이스라고 부름
// querystring || cookie || 변수(variable(react)) => socket : room
// 룸이라는 개념을 js에서 마땅히 표현할게 없음

app.use(express.static("public"));

const chat = io.of("chat");
// app.use('/chat', (req,res) => {})
chat.on("connection", (client) => {
  console.log("connected chat");
  // chat.js 파일 내에서 get, post
  client.on("disconnect", () => {
    console.log("client disconnect");
  });

  // console.log(client.rooms); //nsps = namespaces
  // const temp = new Set();
  // console.log(temp);
  // temp.add(1);
  // console.log(temp);
  // temp.add(2);
  // console.log(temp);
  // temp.add(2);
  // console.log(temp);
  // console.log(new Set([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  // console.log(new Set([{ a: 1 }, { a: 1 }, {}, {}, {}, {}, {}])); // 객체라 전부 다 나옴

  // client.join(1);
  // client.join(2);

  client.on("chat", (data) => {
    let now = [...client.rooms][1];
    if (data.room != now) {
      // client.rooms.clear();
      client.leave(now);
      client.join(data.room);
      now = data.room;
      client.emit("chat", { name: data.room, chat: "에 입장했습니다." }); // 나한테 보내기
      client.broadcast.to(now).emit("chat", { name: data.name, chat: "가 입장했습니다." }); // 나한테 보내기
    }
    // console.log(data);
    // chat.to(1).emit("chat", data);
    chat.to(now).emit("chat", data);
    // chat.emit("chat", data); // chat 대신 io는 안감
    client.emit("chat", { name: "나", chat: "채팅을 쳤다" }); // 나한테 보내기
    // client.leave(1);
    // client.rooms.clear();
    // io.to(); // 개인 룸에 보낼 수 있슴, 개인 룸은ID를 기반으로 함
  });
});

// app.get('/' , (req,res) => {}) ==  << 현재까지한건 옆에 적힌거랑 같다고 보면됨
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
