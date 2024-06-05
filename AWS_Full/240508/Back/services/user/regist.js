import { User } from "../../models/index.js";
import crypto from "crypto";

export default async (req, res) => {
  try {
    if (req.body.pw != req.body["pw-check"]) {
      throw new Error("not match password");
    }

    const hashedStringpw = crypto.createHash("sha256").update(req.body.pw).digest("hex");
    // const hashedStringpwc = crypto.createHash("sha256").update(req.body["pw-check"]).digest("hex");
    console.log(req.body["pw-check"]);
    req.body.pw = hashedStringpw;
    // console.log("아래:", req.body);
    // req.body["pw-check"] = hashedStringpwc;
    // console.log(hashedStringpwc);

    await User.create(req.body);
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not match password") {
      res.status(400);
    } else {
      res.status(409);
    }
    res.json({ error: err.message });
  }
};
