//콜백지옥

// setTimeout(() => {
//   let n = 100;
//   console.log(n);
//   setTimeout(() => {
//     n += 100;
//     console.log(n);
//     setTimeout(() => {
//       n += 150;
//       console.log(n);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const countdown = (n, func, n1) => {
//   setTimeout(() => {
//     console.log(n);
//     if (func) func(n1);
//   }, 1000);
// };

// countdown(50, countdown);

// Promise 무언가 기다려주는 작업

const count = function (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n);
    }, 1000);
    reject("에러났어");
  });
};

// count(1)
//   .then((data) => {
//     // console.log(data + "완료");
//     return count(data + 1);
//   })
//   .then((data) => {
//     console.log(data) + "완료";
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//이거 자주씀
const asyncCount = async function () {
  try {
    // Promise의 상태 :
    // pending : 코드가 실행되고 있는 상태, 결과가 나오지 않은 상태
    // Fulfilled : 성공(resolve)
    // Rjected : 실패(reject)
    let nowCount = 1;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
  } catch (err) {
    console.log(err);
  }
};
asyncCount(); // ==Promise 인스턴스 객체와 같다
