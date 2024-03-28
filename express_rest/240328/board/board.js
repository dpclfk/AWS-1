const listElem = document.getElementById("list");

listElem.innerHTML = `<li class="header">
<ul class="row">
  <li class="num box-center">번호</li>
  <li class="title box-center">제목</li>
  <li class="writer box-center">글쓴이</li>
  <li class="createdAt box-center">등록일</li>
</ul>
</li>`;

class Board {
  static #count = 1;
  #id;
  #title;
  #writer;
  #createdAt;
  #isNotice = false;
  #text;
  constructor(title, writer, text) {
    this.#text = text;
    this.#id = Board.#count++;
    this.#title = title;
    this.#writer = writer;
    this.#createdAt = this.#createdDate();
  }

  #createdDate = () => {
    const date = new Date();
    return `${date.getUTCFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  gettitle = () => this.#title;
  getwriter = () => this.#writer;
  getcreatedAt = () => this.#createdAt;
  getIsNotice = () => this.#isNotice;
}

const list = [
  new Board("오늘의 점심은", "이정배", "text"),
  new Board("오늘의 점심은", "이승배"),
  new Board("오늘의 점심은", "방지완"),
];
console.log(list);

const reRender = () => {
  listElem.innerHTML = `<li class="header">
<ul class="row">
  <li class="num box-center">번호</li>
  <li class="title box-center">제목</li>
  <li class="writer box-center">글쓴이</li>
  <li class="createdAt box-center">등록일</li>
</ul>
</li>`;

  list.forEach((item) => {
    listElem.innerHTML += `<li id=${item.getId()} class="item ${
      item.getIsNotice() ? "notice " : ""
    }">
  <ul class="row">
    <li class="num box-center">${item.getId()}</li>
    <li class="title">${item.gettitle()}</li>
    <li class="writer box-center">${item.getwriter()}</li>
    <li class="createdAt box-center">${item.getcreatedAt()}</li>
  </ul>
</li>`;
    document.getElementById(`${item.getId()}`).onclick = () => {
      console.log(item.getId());
    };
  });
};

reRender();

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  console.log(e.target.form);
  console.log(e.target.form.title.value);
  list.push(
    new Board(
      e.target.form.title.value,
      e.target.form.writer.value,
      e.target.form.text.value
    )
  );

  e.target.form.title.value =
    e.target.form.writer.value =
    e.target.form.text.value =
      "";
  reRender();
};

const titleElem = document.getElementsByClassName("title");

// titleElem[i].onclcik = () => {};
