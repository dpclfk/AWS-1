const net = require("net"); //넷이라는 모듈을 노드js에서 가져옴
const req = require("./req");
const res = require("./res");

const html = `<html>
  <head>
    <meta charset="UTF-8" />
    <title>Post 실험체</title>
  </head>
  <body>
    <form action="./test" method="post">
      <input type="text" name="id" />
      <input type="text" name="pw" />
      <button>보내기~</button>
    </form>
    <button id="get">받아오기</button>
    <script>
      const test = async () => {
        const data = JSON.parse(await(await fetch('./get')).text());
        console.log(data);
      }
      document.getElementById("get").onclick = test
    </script>
  </body>
</html>`;

const users = [];

const server = net.createServer((client) => {
  //서버를 엶
  client.on("data", (data) => {
    //데이터가 요청이 들어왔을때 이벤트, 데이터 값을 받아옴
    const tempReq = req.makeReq(data); //데이터를 req에 넣음 결과로 tempreq
    console.log(tempReq); //뭔지 찍어봄
    // data를 우리가 보기 편한걸로 바꿔줘야 한다. => 객체 -> request ->req
    // 우리가 보내주는것은 String -> response -> res
    if (tempReq.path == "/") {
      const message = res.makeResponse("text/html", html); //메이크 리스폰스에 넣어줌
      client.write(message);
    } else if (tempReq.path == "/test") {
      users.push(tempReq.body);
      const message = res.makeResponse("text/html", html); //메이크 리스폰스에 넣어줌
      client.write(message);
    } else if (tempReq.path == "/get") {
      client.write(res.makeResponse("text/text", JSON.stringify(users)));
    }
    client.end();
  });
});

server.on("error", (err) => {
  //문제 생겼을때 처리
  console.log("err:" + err);
});

server.listen(3000, "127.0.0.1", () => {
  //듣기
  console.log("open server"); //서버 열렸을때 실행할 코드
});
