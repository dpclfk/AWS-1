import { useCallback, useMemo } from "react";
import { useTodoContext } from "../context/TodoProvider";

interface IProps {
  idx: number;
}
const Item = ({ idx }: IProps): JSX.Element => {
  const {
    state: { todoList },
    dispatch,
  } = useTodoContext();
  const item = useMemo(() => {
    return todoList[idx];
  }, [todoList]);

  const toggleComplete = useCallback(() => {
    dispatch({ type: "TOGGLETODO", payload: { id: item.id } });
  }, [todoList]);
  const removeTodo = useCallback(() => {
    dispatch({ type: "REMOVETODO", payload: { id: item.id } });
  }, [todoList]);

  return (
    <div>
      <div>{item.id}</div>
      <div>{item.content}</div>
      <div>{item.isComplete ? "완료" : "진행중"}</div>
      <button onClick={toggleComplete}>완료</button>
      <button onClick={removeTodo}>삭제</button>
    </div>
  );
};

export default Item;
