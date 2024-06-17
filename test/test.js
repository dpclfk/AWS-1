// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.open(
//   "GET",
//   "https://developer-lostark.game.onstove.com/characters/%EC%84%B8%EC%83%81%EC%97%90%EB%8C%80%EB%A8%B8%EB%A6%AC%EA%B0%80%EC%96%B4%EB%94%A8%EC%96%B4%EC%9A%94/siblings",
//   true
// );
// xmlHttpRequest.setRequestHeader("accept", "application/json");
// xmlHttpRequest.setRequestHeader(
//   "authorization",
//   "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOi JodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5 NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU 5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMp bwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw"
// );
// xmlHttpRequest.onreadystatechange = () => {};
const lostapi =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMpbwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw";

const lostlink = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com/",
  headers: {
    accept: "application/json",
    authorization: `${lostapi}`,
  },
});
const usernick = encodeURI("세상에대머리가어딨어요");
const servername = encodeURI("루페온");

// xmlHttpRequest.send();
const testbt = document.getElementsByClassName("testbtn")[0];
testbt.onclick = async (e) => {
  e.preventDefault();
  // await lostlink.get(`characters/${usernick}/siblings`).then((data) => console.log(data)); //보유한 캐릭터 목록
  // await lostlink.get(`armories/characters/${usernick}`).then((data) => console.log(data)); //캐릭터 모든 정보
  // await lostlink.get(`armories/characters/${usernick}/profiles`).then((data) => console.log(data)); //캐릭터 프로필 정보
  // await lostlink.get(`armories/characters/${usernick}/equipment`).then((data) => console.log(data)); //캐릭터 장비 정보(각장비 정보는 장비명 툴팁에 있음)
  // await lostlink.get(`armories/characters/${usernick}/avatars`).then((data) => console.log(data)); //캐릭터 아바타 정보
  // await lostlink
  //   .get(`armories/characters/${usernick}/combat-skills`)
  //   .then((data) => console.log(data)); //캐릭터 스킬 정보(레벨 안올린것도 보여줌)
  // await lostlink
  //   .get(`armories/characters/${usernick}/engravings`)
  //   .then((data) => console.log(data)); //캐릭터 각인 정보
  // await lostlink.get(`armories/characters/${usernick}/cards`).then((data) => console.log(data)); //캐릭터 장착카드 정보
  // await lostlink.get(`armories/characters/${usernick}/gems`).then((data) => console.log(data)); //캐릭터 보석 정보(젬스에서는 보석이름 포함한 정보ㅡ)
  // await lostlink
  //   .get(`armories/characters/${usernick}/colosseums`)
  //   .then((data) => console.log(data)); //캐릭터 pvp 정보(사실상 필요없음)
  // await lostlink
  //   .get(`armories/characters/${usernick}/collectibles`)
  //   .then((data) => console.log(data)); //캐릭터 모험물 정보

  // await lostlink.get(`guilds/rankings?serverName=${servername}`).then((data) => console.log(data)); //서버 길드랭킹 목록
  await lostlink.get(`/gamecontents/challenge-abyss-dungeons`).then((data) => console.log(data)); //이번주 도비스

  // axios
  // .get(`${losturl}`, {
  //   headers: {
  //     accept: "application/json",
  //     authorization:
  //       "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMpbwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw",
  //   },
  // })
  //   .then((data) => console.log(data.data));
  //   axios
  //     .post(
  //       `${losturl}`,
  //       {
  //         Sort: "GRADE",
  //         CategoryCode: 90000,
  //         CharacterClass: "",
  //         ItemTier: null,
  //         ItemGrade: "",
  //         ItemName: "",
  //         PageNo: 1,
  //         SortCondition: "ASC",
  //       },
  //       {
  //         headers: {
  //           accept: "application/json",
  //           authorization:
  //             "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMpbwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((data) => console.log(data));
  // };
};

// curl -X 'GET' \
// 'https://developer-lostark.game.onstove.com/characters/%EC%84%B8%EC%83%81%EC%97%90%EB%8C%80%EB%A8%B8%EB%A6%AC%EA%B0%80%EC%96%B4%EB%94%A8%EC%96%B4%EC%9A%94/siblings'\
//   -H 'accept: application/json' \
//   -H 'authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMpbwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw'

const tttttt = document.getElementsByClassName("tttttt")[0];
tttttt.onclick = (e) => {
  e.preventDefault();
  console.log("testing");

  // lostlink.get(`armories/characters/${usernick}/equipment`).then((data) => console.log(data));
  lostlink
    .post(
      "markets/items",
      {
        Sort: "GRADE",
        CategoryCode: 90000,
        CharacterClass: "",
        ItemTier: null,
        ItemGrade: "",
        ItemName: "",
        PageNo: 1,
        SortCondition: "ASC",
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((data) => console.log(data));
};
