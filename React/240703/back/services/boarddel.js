import { Board } from "../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    console.log(req.body);
    // if (reqbody.contents == "" || reqbody.title == "") {
    //   throw new Error("not empty contents");
    // }

    await Board.destroy({
      where: { id: reqbody.id },
    });

    res.json({ result: "ok" });
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
