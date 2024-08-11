import { ChangeEvent, useCallback, useState } from "react";

// interface IData {
//   value?: string;
// }

const TodoList = (): JSX.Element => {
  //변수 선언 useState
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  //함수 선언 useCallback

  const onchange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  }, []);

  const addTodo = useCallback(() => {
    setList((state) => [...state, inputValue]);
    setInputValue("");
  }, [inputValue]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={inputValue} onChange={onchange} type="text" />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {/* 아래는 Component로 작성 */}
          {list.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
