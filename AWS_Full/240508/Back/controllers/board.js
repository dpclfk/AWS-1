import { Router } from "express";
import getList from "../services/board/list.js";
import write from "../services/board/write.js";
import content from "../services/board/content.js";

const router = Router();

router.post("/list", getList);
router.post("/write", write);
router.post("/cate/:id", content);

export default router;
