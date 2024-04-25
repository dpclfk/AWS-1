const router = require("express").Router();
const { Todo, Sequelize } = require("../../models");

router.use((req, res, next) => {
  res.data = { user: null, regist: false, list: [] };
  next();
});

router.get("/", async (req, res) => {
  // console.log(req.params.id);
  // res.data = { ...res.data, user: req.cookies.user, regist: req.query.regist };
  res.data.user = req.cookies.user;
  if (req.cookies.userId) {
    res.data.list = await Todo.findAll({
      attributes: [
        "content",
        "id",
        [Sequelize.fn("count", Sequelize.col("Todos.id")), "todoCnt"],
      ],
      where: {
        todoId: null,
      },
      include: [
        {
          model: Todo,
          attributes: [],
        },
      ],
      group: [Sequelize.col("Todo.id")],
      raw: true,
    });

    if (res.data.list.length) {
      console.log(JSON.parse(JSON.stringify(res.data.list[0])));
      console.log(res.data.list[0].todoCnt);
    }
  }
  res.render("index", res.data);
});

router.get("/regist", (req, res) => {
  res.data.regist = true;
  // console.log(req.cookies.user);
  res.render("index", res.data);
});

module.exports = router;
