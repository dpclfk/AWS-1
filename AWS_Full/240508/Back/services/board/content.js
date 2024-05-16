import { Board, Category, User } from "../../models/index.js";

export default async (req, res) => {
  try {
    const content = await User.findAll({
      include: [
        {
          model: Board,
          where: { id: req.params.id },
          include: [
            {
              model: Category,
            },
          ],
        },
      ],
    });
    res.json(content);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
