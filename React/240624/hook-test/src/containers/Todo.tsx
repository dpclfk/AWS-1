import { FC, useCallback, useState } from "react";
import Todocomp from "../components/Todo";
import { Todo as Todolib } from "../lib/Todo";

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setlist] = useState<Todolib[]>([new Todolib("할일", "언제까지", true)]);

  const testtest = useCallback((content: string, limit: string, complete: boolean) => {
    setlist((list: Todolib[]) => [...list, new Todolib(content, limit, complete)]);
  }, []);

  return <Todocomp list={list} testtest={testtest} />;
};

export default Todo;
