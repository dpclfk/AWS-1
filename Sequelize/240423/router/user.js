const router = require("express").Router();
const { UserCrypto, UserInfo, sequelize, Sequelize } = require("../models");

router.post("/test", async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const userId = "test1",
      pw = "qwer",
      phone = "123-4567-8910",
      name = "방지완";
    // nick = "무념무상";
    await UserCrypto.create({ userId, pw, phone }, { transaction });
    // await UserInfo.create({ name, nick: null }, { transaction });
    await UserInfo.create({ name }, { transaction });

    await transaction.commit();
  } catch (err) {
    console.error(err);
    await transaction.rollback();
  }
  res.send("ok");
});

router.post("/test2", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction) => {
      // const userId = "test2",
      //   pw = "qwer",
      //   phone = "123-4567-8910",
      //   name = "이정배";
      // nick = "햄스터";

      const tempArr = [
        {
          userId: "test1",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "김강문",
          nick: "아무거나",
          age: 26,
          address: "서울시",
        },
        {
          userId: "test2",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "박성민",
          nick: "캐럿",
          age: 34,
          address: "서울시",
        },
        {
          userId: "test3",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "방지완",
          nick: "곰",
          age: 27,
          address: "서울시",
        },
        {
          userId: "test4",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "손민복",
          nick: "민복손",
          age: 27,
          address: "고양시",
        },
        {
          userId: "test5",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이동찬",
          nick: "사과",
          age: 29,
          address: "남양주시",
        },
        {
          userId: "test6",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이승배",
          nick: "무념무상",
          age: 25,
          address: "안양시",
        },
        {
          userId: "test7",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이정배",
          nick: "햄스터",
          age: 23,
          address: "안양시",
        },
      ];

      for (const { userId, pw, phone, name, nick, age, address } of tempArr) {
        await UserCrypto.create({ userId, pw, phone }, { transaction });
        // await UserInfo.create({ name, nick: null }, { transaction });
        await UserInfo.create({ name, nick, age, address, gender: "M" }, { transaction });
      }
    });
  } catch (err) {
    console.error(err);
  }
  res.send("ok");
});

router.get("/info", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction) => {
      // const userId = "test2",
      //   pw = "qwer",
      //   phone = "123-4567-8910",
      //   name = "이정배";
      // nick = "햄스터";

      const tempArr = [
        {
          userId: "test1",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "김강문",
          nick: "아무거나",
          age: 26,
          address: "서울시",
        },
        {
          userId: "test2",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "박성민",
          nick: "캐럿",
          age: 34,
          address: "서울시",
        },
        {
          userId: "test3",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "방지완",
          nick: "곰",
          age: 27,
          address: "서울시",
        },
        {
          userId: "test4",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "손민복",
          nick: "민복손",
          age: 27,
          address: "고양시",
        },
        {
          userId: "test5",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이동찬",
          nick: "사과",
          age: 29,
          address: "남양주시",
        },
        {
          userId: "test6",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이승배",
          nick: "무념무상",
          age: 25,
          address: "안양시",
        },
        {
          userId: "test7",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이정배",
          nick: "햄스터",
          age: 23,
          address: "안양시",
        },
      ];

      for (const { userId, pw, phone, name, nick, age, address } of tempArr) {
        await UserCrypto.create({ userId, pw, phone }, { transaction });
        // await UserInfo.create({ name, nick: null }, { transaction });
        await UserInfo.create({ name, nick, age, address, gender: "M" }, { transaction });
      }
    });
  } catch (err) {
    console.error(err);
  }

  res.send(
    // await UserCrypto.findAll({
    //   // where: { address: "서울시" },
    //   attributes: [
    //     // "address",
    //     "id",
    //     // [sequelize.fn("count", Sequelize.col("age")), "이름"],
    //   ],
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: ["name"],
    //     },
    //   ],
    //   // group: ["UserInfo.id"],
    // })

    await UserInfo.findAll({
      where: { address: "서울시" },
      attributes: ["address"],
      include: [
        {
          attributes: ["pw"],
          model: UserCrypto,
          include: [
            {
              attributes: ["age"],
              model: UserInfo,
            },
          ],
        },
      ],
      // where: { address: "서울시" },
      // include: [
      //   {
      //     model: UserCrypto,
      //     include: [{ model: UserInfo }],
      //   },
      // ],
      // order: [["age", "desc"]],
      // having: { age: { [Sequelize.Op.gt]: 27 } },
    })

    // await UserInfo.findAll({
    //   attributes: [
    //     "address",
    //     // "id",
    //     [sequelize.fn("count", Sequelize.col("age")), "sum_age"],
    //   ],
    //   // include: [
    //   //   {
    //   //     model: UserInfo,
    //   //     attributes: [],
    //   //   },
    //   // ],
    //   group: ["UserInfo.address"],
    //   // raw: true,
    // })
    // Sequelize.col("age") 라고 써야 평균값을 제대로 불러옴

    // SELECT AVG(age) AS avg_age FROM user_info;
    // await UserInfo.findAll({
    //   attributes: [[sequelize.fn("count", "age"), "avg_age"]],
    // })
    // Sequelize.col("age") 대신 "age"만 써도 작동됨

    // SELECT address FROM user_info GROUP BY address;
    // await UserInfo.findAll({
    //   attributes: ["address"],
    //   group: ["address"],
    // })

    // SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address;
    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    // })

    // SELECT uc.id, uc.user_id, uc.pw, uc.phone, ui.name, ui.nick, ui.age, ui.address FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id ORDER BY ui.age DESC;
    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    // })
    // order을 통해 cnt값 크기대로 오름/내림차순 순으로 정렬

    // SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt=1;
    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { cnt: 1 },
    // })
    // having을 통해 cnt가 1인값을 가져옴

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { cnt: { [Sequelize.Op.gt]: 1 } },
    // })
    // cnt가 1보다 큰값을 가져옴, gte는 1과 같거나 큰값
    // lt는 작은값
    // lte는 작거나 같은값
    // ne는 같지 않은값

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { cnt: { [Sequelize.Op.lte]: 2 } },
    // })

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { [Sequelize.Op.and]: [{ cnt: { [Sequelize.Op.gt]: 2 } }] },
    // })

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { cnt: { [Sequelize.Op.ne]: 2 } },
    // })

    // await UserInfo.findAll({
    //   attributes: ["name", "age"],
    //   // where: { name: { [Sequelize.Op.like]: "이%" } },
    //   where: { name: { [Sequelize.Op.startsWith]: "이" } },
    // })

    // await UserCrypto.findAll({
    //   attributes: ["id", "user_id", "pw", "phone"], //컬럼명 뽑아줌
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: ["name", "nick", "age", "address"],
    //     },
    //   ],
    //   order: [[UserInfo, "age", "desc"]], //ORDER BY ui.age
    //   // limit: 2,
    //   // offset: 2,
    //   // group: [[UserInfo, "address"]],
    // })

    // await UserCrypto.findAll({
    //   attributes: [
    //     [sequelize.col("UserInfo.address"), "address"],
    //     [sequelize.fn("count", sequelize.col("UserInfo.name")), "address_cnt"],
    //     [sequelize.fn("count", "*"), "address3_cnt"],
    //   ],
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: [],
    //       // where: {
    //       //   address: "서울시",
    //       // },
    //     },
    //   ],
    //   // order: [[UserInfo, "age", "desc"]], //ORDER BY ui.age
    //   order: [["address_cnt", "desc"]], //ORDER BY ui.age
    //   // limit: 2,
    //   // offset: 2,
    //   group: [["address"]],
    // })
  );
});

router.get("/test", async (req, res) => {
  // res.send([...(await UserCrypto.findAll()), ...(await UserInfo.findAll())]);
  res.send(
    await UserCrypto.findAll({
      where: {},
      attributes: ["userId", "phone"],
      include: [
        {
          model: UserInfo,
          attributes: ["name", "nick"],
        },
      ],
    })
  );
});

module.exports = router;
