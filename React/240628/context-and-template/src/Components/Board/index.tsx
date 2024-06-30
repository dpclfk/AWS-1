import { useContext, useEffect } from "react";
import Comp from "./Comp";
import { ITodoContext, TodoContext } from "../../context/todoList";

const Board = (): JSX.Element => {
  // const { addList } = useContext(TodoContext) as ITodoContext;

  // useEffect(() => {
  //   addList({ num: 1, content: "asfaasf", limit: "240630", priority: 1 });
  // }, []);

  return <Comp></Comp>;
};

export default Board;
