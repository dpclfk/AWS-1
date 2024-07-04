import { Board } from "../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    let nowpage = req.query.page;

    if (!nowpage) {
      nowpage = 1;
    }
    // if (reqbody.contents == "" || reqbody.title == "") {
    //   throw new Error("not empty contents");
    // }
    const boardlist = await Board.findAll({
      order: [["id", "DESC"]],
      offset: (nowpage - 1) * 10,
      limit: 10,
    });

    res.json({ result: "ok", list: boardlist });
  } catch (err) {
    console.error(err);
    if (err.message == "not empty contents") {
      res.status(400);
    } else {
      res.status(419);
    }
    res.json({ error: err.message });
  }
};
