import { Board, Category, User } from "../../models/index.js";

export default async (req, res) => {
  try {
    const content = await Board.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: User,
        },
        {
          model: Category,
        },
      ],
    });
    res.json(content);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
