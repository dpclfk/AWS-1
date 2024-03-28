const fs = require("fs");
const path = require("path");

const staticObj = {};

const rootPath = path.join(__dirname, "../", "views");

// console.log(directory);

const find = (currPath) => {
  const directory = fs.readdirSync(currPath);

  directory.forEach((currPathName) => {
    // console.log(currPathName);
    const findPath = path.join(currPath, currPathName);
    const isFile = fs.statSync(findPath).isFile();
    // console.log(isFile);
    if (isFile) {
      // staticObj[findPath.replace(rootPath, "")] = findPath;
      staticObj[findPath.slice(rootPath.length)] = findPath;
      staticObj[findPath.slice(rootPath.length).replace("index.html", "")] =
        findPath;
    } else {
      find(findPath);
    }
  });
};
find(rootPath);
console.log(staticObj);

// const rootPath1 = path.join(__dirname, "../", "views", "write");
// const isFile = fs.statSync(rootPath1).isFile();
// console.log(isFile);

module.exports = staticObj;

// staticObj["/index.html"] =
//   "/Users/lee/Desktop/kga/AWS/NodeJs/240325/views/index.html";
