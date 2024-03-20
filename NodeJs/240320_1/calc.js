// 계산기를 위한 함수들을 만들어서 내보내 보자

// module.exports = {
//   add(a, b) {
//     return a + b;
//   },
//   minus(a, b) {
//     return a - b;
//   },
//   multiple(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     return a / b;
//   },
//   add1(a, b) {
//     c = a + b;
//     console.log(c);
//   },
// };

// function add(a, b) {
//   return a + b;
// }
const add = (a, b) => {
  return a + b;
};
function minus(a, b) {
  return a - b;
}
function multiple(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
module.exports = { add, minus, divide, multiple };
