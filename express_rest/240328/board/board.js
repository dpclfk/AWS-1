const listElem = document.getElementById("list");

const titleElem = document.getElementById("view-title");
const writerElem = document.getElementById("view-writer");
const createdAtElem = document.getElementById("view-created_at");
const contentElem = document.getElementById("view-content");

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
  writer;
  #content;
  #createdAt;
  #isNotice = false;
  constructor(title, writer, content) {
    this.#id = Board.#count++;
    this.#title = title;
    this.#content = content;
    this.writer = writer;
    this.#createdAt = this.#createdDate();
  }

  #createdDate = () => {
    const date = new Date();
    return `${date.getUTCFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  gettitle = () => this.#title;
  getwriter = () => this.writer;
  getContent = () => this.#content;
  getcreatedAt = () => this.#createdAt;
  getIsNotice = () => this.#isNotice;
}

const list = [
  new Board("오늘의 점심은", "이정배", "text"),
  new Board("오늘의 점심은", "이승배", "123"),
  new Board("오늘의 점심은", "방지완", "123"),
];

console.log(list[0].writer);

const setView = (idx) => {
  titleElem.innerText = list[idx].gettitle();
  writerElem.innerText = list[idx].getwriter();
  createdAtElem.innerText = list[idx].getcreatedAt();
  contentElem.innerText = list[idx].getContent();
};

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
    const tempElem = document.createElement("li");

    tempElem.classList.add("item");
    if (item.getIsNotice()) tempElem.classList.add("notice");

    tempElem.innerHTML += `<ul class="row">
    <li class="num box-center">${item.getId()}</li>
    <li class="title">${item.gettitle()}</li>
    <li class="writer box-center">${item.getwriter()}</li>
    <li class="createdAt box-center">${item.getcreatedAt()}</li>
  </ul>
</li>`;
    tempElem.onclick = () => {
      setView(item.getId() - 1);
    };
    listElem.append(tempElem);
  });
};

reRender();

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  console.log(e.target.form);
  console.log(e.target.form.title.value);
  for (let i = 0; i < list.length; i++) {
    if (e.target.form.writer.value == list[i].writer) {
      e.target.form.writer.value = `${e.target.form.writer.value}아님`;
    }
  }
  list.push(
    new Board(
      e.target.form.title.value,
      e.target.form.writer.value,
      e.target.form.content.value
    )
  );

  e.target.form.title.value =
    e.target.form.writer.value =
    e.target.form.content.value =
      "";
  reRender();
};

// titleElem[i].onclcik = () => {};
