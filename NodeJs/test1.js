console.log("test1.js 파일을 읽기 시작했어.");

let a = 1;
global.b = 5;

// export {};
// 코드의 모음 >> Library, Module, Framework
module.exports = { a, b }; //export
// a를 포함한다 == export
