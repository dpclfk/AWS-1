import { FC, useCallback, useState, ChangeEvent } from "react";
import { Todo } from "../../../hooks/todoList";
import Comp from "./Comp";

export interface IProps {
  // todo: Todo;
  addTodo: (todo: Todo) => void;
  // idx: number;
}

const Add: FC<IProps> = ({ addTodo }) => {
  const [content, setContent] = useState<string>("");
  const isComplete: boolean = false;
  const [priority, setpriority] = useState<number>(1);
  const date = new Date();
  const createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // const createdAt = "asdasd";
  const [limit, setlimit] = useState<string>("");

  const changeContent = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setContent(value);
  }, []);
  // const changeisComplete = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
  //   setisComplete(false);
  // }, []);
  const changepriority = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const temp = +value;
    if (!isNaN(temp)) setpriority(temp);
  }, []);
  // const changecreatedAt = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
  //   setcreatedAt(value);
  // }, []);
  const changelimit = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setlimit(value);
  }, []);

  const addtest = useCallback(() => {
    addTodo({
      content: content,
      isComplete: isComplete,
      priority: priority,
      createdAt: createdAt,
      limit: limit,
    });
    setContent("");
  }, [content, priority, limit]);
  return (
    <Comp
      content={content}
      // isComplete={isComplete}
      priority={priority}
      // createdAt={createdAt}
      limit={limit}
      addtest={addtest}
      changeContent={changeContent}
      // changeisComplete={changeisComplete}
      changepriority={changepriority}
      // changecreatedAt={changecreatedAt}
      changelimit={changelimit}
    />
  );
};

export default Add;
