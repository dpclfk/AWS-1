import { FC } from "react";
import List from "./List";
import { Todo as Todolib } from "../lib/Todo";

export interface IProps {
  testtest(content: string, limit: string, complete: boolean): void;
}

const Add: FC<IProps> = ({ testtest }) => {
  return <button onClick={() => testtest("12412", "12125", false)}>테스트</button>;
};

export default Add;
