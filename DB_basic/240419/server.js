const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "aws",
  password: "1234qwer",
  database: "AWS_TEST",
});

connection.connect();

// connection.query("SHOW TABLES", (err, results, fields) => {
//   console.log("err: ", err);
//   console.log("results: ", results);
//   console.log("fields: ", fields);
// });

// connection.query("SELECT * FROM aws_student", (err, results, fields) => {
//   console.log("err: ", err);
//   console.log("results: ", results);
//   console.log("fields: ", fields);
// });
// console.log(mysql.Types);

// connection.query(
//   "INSERT INTO test (id, name, nick) VALUES (?, ?, ?)",
//   [8, "arr1", "arr1"],
//   (err, results, fields) => {
//     console.log("err: ", err);
//     console.log("results: ", results);
//     console.log("fields: ", fields);
//   }
// );
// ?의 갯수와 배열의 갯수가 동일해야된다

const findInTest = (id) => {
  connection.query(
    "SELECT * FROM test WHERE id=?",
    [id],
    (err, results, fields) => {
      console.log("err: ", err);
      console.log("results: ", results);
      // console.log("fields: ", fields);
    }
  );
};

findInTest(2);

// connection.end();

// ALTER USER aws IDENTIFIED WITH mysql_native_password BY '1234qwer';
