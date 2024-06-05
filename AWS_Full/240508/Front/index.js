const categoryList = [
  { name: "전체", href: "./" },
  {
    name: "정보",
    href: "./",
    categorys: [
      {
        name: "OP.GG 기획",
        href: "./",
      },
      { name: "유저 뉴스", href: "./", isWrite: true },
      { name: "팁과 노하우", href: "./", isWrite: true },
      { name: "패치노트", href: "./" },
    ],
  },
  {
    name: "커뮤니티",
    href: "./",
    categorys: [
      { name: "자유", href: "./", isWrite: true },
      { name: "유머", href: "./", isWrite: true },
      { name: "질문", href: "./", isWrite: true },
      { name: "영상", href: "./", isWrite: true },
      { name: "사건 사고", href: "./", isWrite: true },
      { name: "전적 인증", href: "./", isWrite: true },
      { name: "팬 아트", href: "./", isWrite: true },
    ],
  },
  {
    name: "e스포츠",
    href: "./",
    categorys: [
      { name: "LCK", href: "./", isWrite: true },
      { name: "기타 리그", href: "./", isWrite: true },
    ],
  },
];

const cateElem = document.getElementById("category-list");

categoryList.forEach((cate1) => {
  let str = "";
  if (cate1.categorys) {
    str += `
    <li>
      <a href="${cate1.href}">
        <h4>${cate1.name}<span>&gt</span></h4>
      </a>
      <ul>`;
    cate1.categorys.forEach((cate2) => {
      str += `
        <li>
          <a href="${cate2.href}"><span>${cate2.name}</span></a>
        </li>`;
    });
    str += `
      </ul>
    </li>`;
  } else {
    str += `
    <li>
      <a href="${cate1.href}"><h4>${cate1.name}</h4></a>
    </li>`;
  }
  cateElem.innerHTML += str;
});

const linkList = [
  { name: "유저 찾기", href: "./", img: "./imgs/icon-community-lfg.png" },
  { name: "양성소", href: "./", img: "./imgs/icon-community-subculture.png" },
  { name: "잡담소", href: "./", img: "./imgs/icon-community-talk.png" },
];

const linkListElem = document.getElementById("link-list");

linkList.forEach((link) => {
  linkListElem.innerHTML += `
  <li>
    <a href="${link.href}">
      <div class="link-item">
        <div class="img-box">
          <img src="${link.img}" alt="" />
        </div>
        <span>${link.name}</span>
      </div>
    </a>
  </li>`;
});

const tempArr = [...categoryList];
const cateSeleElem = document.getElementById("category");

for (let i = 0; i < tempArr.length; ++i) {
  cateSeleElem.innerHTML += `<option value="${tempArr[i].href}">${tempArr[i].name}</option>`;
  if (tempArr[i].categorys) tempArr.push(...tempArr[i].categorys);
}

const listElem = document.getElementById("list");

const userInfoElem = document.getElementById("user-info");
(async () => {
  // const user = (
  //   await axios({
  //     method: "post",
  //     url: "http://localhost:8000/user/info",
  //     withCredentials: true,
  //   })
  // ).data;

  const user = (
    await axios.post(
      "http://localhost:8000/user/info", // url
      { id: 1 }, // body
      {
        // options
        withCredentials: true,
      }
    )
  ).data;

  // console.log(user);
  if (user.user) {
    userInfoElem.innerHTML = `<div class="user-level">
    <div class="level-img">
      <img src="../imgs/icon-community-lfg.png" alt="" />
    </div>
    <div class="name-level">
      <div class="user-name">${user.user}</div>
      <div class="user-now-level">레벨 1</div>
      <div class="user-level-bar"></div>
      <div class="next-level">다음 레벨까지 11 남음</div>
    </div>
  </div>
  <div class="user-menu">
    <div class="user-write-comment">
      <div class="user-writed">
        <a href="./"><button>내가 쓴 글</button></a>
      </div>
      <div class="user-comment">
        <a href="./logout"><button>내가 쓴 댓글</button></a>
      </div>
    </div>
    <div class="user-ward-write">
      <div class="user-ward">
        <a href="./list"><button>내 와드</button></a>
      </div>
      <div class="user-write">
        <a href="./write"><button>글 쓰기</button></a>
      </div>
    </div>
    <div class="user-link">
      <a href="./">
        <button>게임 계정 연결</button>
      </a>
    </div>
  </div>`;
  }

  const boardList = (
    await axios.post(
      "http://localhost:8000/board/list", // url
      { testid: 1 }, // body
      {
        // options
        withCredentials: true,
      }
    )
  ).data;
  // const listcr = boardList.list[0].createdAt;
  // console.log(listcr);
  // console.log(Date.parse(listcr));
  // console.log(new Date(listcr).getDate());
  // console.log(boardList.list.length);
  // console.log(boardList.list[0].Category.name);
  // console.log(nowDate);
  console.log(boardList.list);

  let maxView = 20;

  const nowDate = new Date().getDate();

  for (let i = boardList.list.length - 1; i > boardList.list.length - maxView; i--) {
    if (i < 0) return;
    const boardCreateAt = new Date(boardList.list[i].createdAt);
    let listCreateAt = {};
    if (boardCreateAt.getDate() == nowDate) {
      listCreateAt = `${boardCreateAt.getHours()} : ${boardCreateAt.getMinutes()}`;
    } else {
      listCreateAt = `${boardCreateAt.getYear() - 100}.${boardCreateAt
        .getMonth()
        .toString()
        .padStart(2, "0")}.${boardCreateAt.getDate().toString().padStart(2, "0")}`;
    }
    listElem.innerHTML += `<li>
  <a href="./board/?cate=${boardList.list[i].Category.name}&id=${i + 1}">
    <div class="item">
      <div class="like">
        <p>▲</p>
        <p>123</p>
      </div>
      <div class="text">
        <h4>${boardList.list[i].title} <span>[32]</span></h4>
        <p>${boardList.list[i].Category.name} | ${listCreateAt} | ${boardList.list[i].User.nick}</p>
      </div>
      <div class="img">
        <img src="./imgs/bg_lol.jpg" alt="" />
      </div>
    </div>
  </a>
  </li>`;
  }
})();
