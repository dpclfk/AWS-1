class Item {
  element;
  constructor({ title, commentCount, updateAt }) {
    this.element = document.createElement("li");
    this.element.classList.add("item");

    const aElem = document.createElement("a");
    this.element.append(aElem);
    this.element.innerHTML = ` 
    <span>${title} [${commentCount}]</span>
    <span class="update-time">${this.getTime(updateAt)}</span>`;
  }
  getTime(updateAt) {
    const now = Date.now();
    const updateTime = now - updateAt;
    if (updateTime > 24 * 60 * 60 * 1000) {
      return Math.floor(updateTime / (24 * 60 * 60 * 1000)) + "일전";
    } else if (updateTime > 60 * 60 * 1000) {
      return Math.floor(updateTime / (60 * 60 * 1000)) + "시간전";
    } else if (updateTime > 60 * 1000) {
      return Math.floor(updateTime / (60 * 1000)) + "분전";
    } else {
      return Math.floor(updateTime / 1000) + "초전";
    }
  }
}

class Channel {
  element;
  constructor({ title, list }) {
    this.element = document.createElement("div");
    this.element.classList.add("chcontents");
    const titleAElem = document.createElement("a");
    const titleElem = document.createElement("h3");
    titleElem.innerHTML = title;
    titleAElem.append(titleElem);
    this.element.append(titleAElem);

    const listElem = document.createElement("ul");
    listElem.classList.add("boardlist");
    list.forEach((item) => {
      const instance = new Item(item);
      listElem.append(instance.element);
    });
    this.element.append(listElem);
  }
}

class Row {
  element;
  constructor({ list }) {
    this.element = document.createElement("div");
    this.element.classList.add("flex-box", "chlist");
    list.forEach((item) => {
      this.element.append(new Channel(item).element);
    });
  }
}

document.getElementsByClassName("contents")[0].append(
  new Row({
    list: [
      {
        title: "명조 채널",
        list: [
          {
            title: "각 보스별 취약속성같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다",
            commentCount: 0,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 음림 솔플",
            commentCount: 2,
            updateAt: Date.now() - 5 * 60 * 1000,
          },
          {
            title: "에코파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element,
  new Row({
    list: [
      {
        title: "명조 채널",
        list: [
          {
            title: "각 보스별 취약속성같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다",
            commentCount: 0,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 음림 솔플",
            commentCount: 2,
            updateAt: Date.now() - 5 * 60 * 1000,
          },
          {
            title: "에코파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element,
  new Row({
    list: [
      {
        title: "명조 채널",
        list: [
          {
            title: "각 보스별 취약속성같은거 있음?",
            commentCount: 1,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "오늘의 보라왜가리 파밍은 망했다",
            commentCount: 0,
            updateAt: Date.now() - 4 * 60 * 1000,
          },
          {
            title: "홀로그램 고릴라 5단계 1돌 음림 솔플",
            commentCount: 2,
            updateAt: Date.now() - 5 * 60 * 1000,
          },
          {
            title: "에코파밍 진짜 힘드네",
            commentCount: 3,
            updateAt: Date.now() - 6 * 60 * 1000,
          },
        ],
      },
    ],
  }).element
  // new Row().element
);

// const channel = new Channel({
//   title: "명조 채널",
//   list: [
//     {
//       title: "각 보스별 취약속성같은거 있음?",
//       commentCount: 1,
//       updateAt: Date.now() - 4 * 60 * 1000,
//     },
//     {
//       title: "오늘의 보라왜가리 파밍은 망했다",
//       commentCount: 0,
//       updateAt: Date.now() - 4 * 60 * 1000,
//     },
//     {
//       title: "홀로그램 고릴라 5단계 1돌 음림 솔플",
//       commentCount: 2,
//       updateAt: Date.now() - 5 * 60 * 1000,
//     },
//     {
//       title: "에코파밍 진짜 힘드네",
//       commentCount: 3,
//       updateAt: Date.now() - 6 * 60 * 1000,
//     },
//   ],
// });

// document.getElementsByClassName("contents")[0].append(channel.element);
