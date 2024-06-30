import { useContext, useEffect, useMemo, useState } from "react";
import List, { ITitle } from "../List";
import { ITodo, ITodoContext, TodoContext } from "../../context/todoList";

// interface ITodo {
//   number: number;
//   content: string;
//   priority: number;
//   limit: string;
// }

const Todo = (): JSX.Element => {
  // const [list, setList] = useState<ITodo[]>([
  //   { number: 1, content: "testing", priority: 1, limit: "언제까지" },
  // ]);
  const { list } = useContext(TodoContext) as ITodoContext;
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [
      { key: "num" as keyof ITodo, name: "No." },
      { key: "content" as keyof ITodo, name: "할 일", isStrech: true },
      { key: "limit" as keyof ITodo, name: "기간 제한" },
    ],
    []
  );
  // useEffect(() => {
  //   addList({ num: 1, content: "asfaasf", limit: "240630", priority: 1 });
  // }, []);
  return (
    <div>
      <List list={list} titleList={titleList}></List>
    </div>
  );
};

export default Todo;
