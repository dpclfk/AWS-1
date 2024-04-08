const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(decodeURI(req.headers.cookie));
  console.log(req.cookies.name);
  console.log(req.signedCookies.name);
  if (req.cookies.name != undefined) {
    res.cookie("name", req.cookies.name, { maxAge: 10 * 1000 });
  }
  res.send("cookie를 확인하세요.");
});

router.get("/add", (req, res) => {
  res.cookie("name", "rufrhkghkrdlsdyd", {
    // maxAge: 10 * 1000 // 기간 설정, 최대 나이 timoout
    expires: new Date(Date.now() + 10000), // 기준 설정 alarm 몇시에 삭제되는 개념
    // path: "/", // goekd path에 대해서 설정 add로 설정할경우 루트로가면 안보임
    secure: true, // https에 대해서 설정
    signed: true, // 쿠키를 암호화 한다.(난독화)
    httpOnly: true, // socket 통신 등은 적용되지 않는다.
  });
  res.redirect("/");
});

router.get("/remove", (req, res) => {
  res.cookie("name", "김강문", { maxAge: 30 * 60 * 1000 });
  res.redirect("/");
});

module.exports = router;
