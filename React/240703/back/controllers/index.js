import { Router } from "express";

import list from "../services/list.js";
import write from "../services/write.js";
import modify from "../services/modify.js";
import boarddel from "../services/boarddel.js";

const router = Router();

router.post("/", list);
router.post("/write", write);
router.post("/modify", modify);
router.post("/boarddel", boarddel);

export default router;
