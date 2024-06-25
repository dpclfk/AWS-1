import { FC } from "react";
import List from "./List";
import { Todo as Todolib } from "../lib/Todo";
import Add from "./Add";

export interface ITodoProps {
  list: Todolib[];
}

export interface IProps extends ITodoProps {
  testtest(content: string, limit: string, complete: boolean): void;
}

const Todo: FC<IProps> = ({ list, testtest }) => {
  return (
    <div>
      <Add testtest={testtest} />
      <List list={list} />
    </div>
  );
};

export default Todo;
