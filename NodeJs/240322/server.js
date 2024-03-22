const net = require("net");
const { makeReq } = require("./lib/req");
const { makeResponse, redirect } = require("./lib/res");

const COUNTRY = ["대한민국", "미국", "일본", "중국"];
const CITY = [
  ["경기도", "서울", "강원도", "인천"],
  ["뉴욕", "LA", "텍사스"],
  ["도쿄", "오사카", "오키나와"],
  ["후찬성", "베이징", "상해"],
];

// const user = {
//   id: "",
//   pw: "",
//   name: "",
//   job: "",
//   age: 0,
//   adress: {
//     country: COUNTRY[0],
//     city: CITY[this.country][0],
//     road: "",
//     roadCount: 0,
//     buildName: "",
//     floor: 0,
//     roomCount: 0,
//   },
// };
const html = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <form action="http://localhost:3000" method="post">
    <fieldset>
      <legend>Sword Art Online</legend>
      <input type="text" name="id" placeholder="ID" />
      <input type="password" name="pw" placeholder="pw" />
      <button>Link Start</button>
      <button type="reset">Reset</button>
    </fieldset>
  </form>
  <ul id="users"></ul>
  <script>
    const getUsers = async () => {
      try {
        console.log('시작했어')
        const usersRes = await fetch("http://localhost:3000/list", {
          mode: "no-cors",
        });
        const usersData = await usersRes.text();
        const userArr = JSON.parse(usersData);
        console.log(userArr);
        const usersElem = document.getElementById('users')
        userArr.forEach(item=>{
          usersElem.innerHTML += "<li>" + item.id + "</li>"
        })
        // const userArr = JSON.parse(
        //   await (await fetch("http://localhost:3000/list")).text()
        // );
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
    console.log('언제뜨니?')
  </script>
</body>
</html>
`;
const users = [];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";
  if (method == "GET") {
    if (path == "/") message = makeResponse("text/html", html);
    else if (path == "/list")
      message = makeResponse("application/json", JSON.stringify(users));
  } else if (method == "POST") {
    if (path == "/") {
      users.push(body);
      message = redirect();
    }
  }
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    console.log(req.header);
    console.log(req.header);

    client.write(getMessage(req));
    client.end();
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
