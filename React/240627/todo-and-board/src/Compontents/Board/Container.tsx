import { FC, useState } from "react";
import Comp, { IBoard } from "./Compontent";

const Board: FC = () => {
  const [list, setList] = useState<IBoard[]>([
    {
      id: 1,
      title: "점심뭐먹지 편의점도시락 먹을까",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "점심뭐먹지 편의점도시락 먹을까",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "점심뭐먹지 편의점도시락 먹을까",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "점심뭐먹지 편의점도시락 먹을까",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
  ]);
  return <Comp list={list} />;
};

export default Board;
