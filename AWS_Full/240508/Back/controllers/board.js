import { Router } from "express";
import getList from "../services/board/list.js";
import write from "../services/board/write.js";
import content from "../services/board/content.js";

const router = Router();

router.post("/list", getList);
router.post("/write", write);
router.post("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.user);
  res.json({ result: "hi" });
});
// router.post("/", content);

export default router;
