// Sequelize : DB를 연결할 때 유용하게 사용할 수 있는 라이브러리
// Sequelize와 같이쓰는 라이브러리는 'mysql2'
require("dotenv").config();

const { sequelize, Sequelize, User, Board } = require("./models");

(async () => {
  await sequelize.sync({ force: true });
  console.log("access db");
  // await User.create({
  //   userId: "test",
  //   name: "test",
  //   password: "test",
  // });
  // for (let i = 0; i < 5; i++) {
  //   await User.create({
  //     userId: "test" + i,
  //     name: "test" + i,
  //     password: "test",
  //   });
  // }
  for (let i = 10; i < 15; i++) {
    await User.create({
      userId: "test" + i,
      name: "test" + i,
      password: "test",
    });
  }
  // const list = await User.findAndCountAll({
  //   where: { name: { [Sequelize.Op.like]: "%test1%" } },
  //   limit: 3,
  // });
  // console.log(list.rows[0].name);
  // console.log(list.rows[1].name);
  // console.log(list.rows[2]);
})();
