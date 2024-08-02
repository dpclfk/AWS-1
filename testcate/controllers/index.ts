import { Request, Response, Router } from "express";
import { CategoryTest } from "../models";

const router: Router = Router();

import catetest from "../services/category";

router.get("/", catetest);

// router.get("/", (req: Request, res: Response) => {
//   CategoryTest.create({ name: "12" });
//   res.json("ok");
// });

export default router;
