const test1 = require("./test1.js");
const test2 = require("./test2.js");

// import 가져오기
// 노드JS에 ES6쓰라고 말 안하면 이전문법 사용

global.a = 1;

console.log(global.a);
console.log(a);

console.log(test1);
test2.consoleTest();
test2.setText("아니야, 이건 바닐라 자바스크립트야");
test2.consoleTest();
test2.consoleStr("이것도 확인해볼까?");
