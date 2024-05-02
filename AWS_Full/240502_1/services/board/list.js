import { Board, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const list = await Board.findAll({
      include: [
        {
          model: Category, // Board 에서의 카테고리
          include: [
            {
              model: Category, // 상위 카테고리
              as: "parent",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
              include: [
                {
                  model: Category, // 하위 카테고리 가져오기
                  as: "children",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                  },
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
