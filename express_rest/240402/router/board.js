const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const boards = [
  { id: 1, title: "점심", writer: "이정배", createdAt: "24-04-02" },
  { id: 1, title: "점심", writer: "이승배", createdAt: "24-04-02" },
];
router.get("/", (req, res) => {
  const boardHtmlPath = path.join(__dirname, "..", "views", "board.html");
  const boardHtmlTemplatePath = path.join(
    __dirname,
    "..",
    "views",
    "boardtemolate.html"
  );

  const html = fs.readFileSync(boardHtmlPath, { encoding: "utf8" });
  const boardTemplate = fs.readFileSync(boardHtmlTemplatePath, {
    encoding: "utf8",
  });

  let tempStr = ``;
  const objNames = ["id", "title", "writer", "createdAt", "view"];
  // const names = Object.keys(boards[0]); << 알아서 찾아볼것

  boards.forEach((item) => {
    let itemStr = boardTemplate;
    objNames.forEach((name) => {
      itemStr = itemStr.replaceAll(`{{${name}}}`, item[name]);
      // console.log(name);
      // console.log(item);
      console.log(itemStr);
    });
    tempStr += itemStr;
  });

  tempStr = html.replace("{{list}}", tempStr);
  res.send(tempStr);
});

router.post("/", (req, res) => {
  console.log("board 정보 필요");
  res.redirect("/");
});

router.post("/like", (req, res) => {
  console.log(req.body.like);
  res.redirect("/");
});

// app.post("/board", (req, res) => {});

module.exports = router;
