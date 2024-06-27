import { FC } from "react";
import useTodoList from "../../hooks/todoList";
import Comp from "./Comp";

const Todo: FC = () => {
  const { list, addTodo, removeTodo, completeTodo } = useTodoList();

  return <Comp list={list} addTodo={addTodo} removeTodo={removeTodo} completeTodo={completeTodo} />;
};

export default Todo;
