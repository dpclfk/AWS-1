const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename)); //경로

console.log(path.basename(__filename)); //파일명

console.log(path.extname(__filename)); //파일 확장자

console.log(path.join(__dirname, "public", "../"));
