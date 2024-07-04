import { ChangeEvent, useCallback, useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

const Add = (): JSX.Element => {
  // const [id, setId] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const changeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);
  // const changeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setId(+e.target.value);
  // }, []);

  const { dispatch } = useTodoContext();
  const addTodo = () => {
    dispatch({
      type: "ADDTODO",
      payload: {
        // id,
        content,
        // isComplate: false,
      },
    });
  };

  return (
    <div>
      <input type="text" value={content} onInput={changeContent} placeholder="content" />
      {/* <input type="text" value={id} onInput={changeId} placeholder="id" /> */}

      <button onClick={addTodo}>추가</button>
    </div>
  );
};

export default Add;
