import { useCallback, useEffect, useState } from "react";

const Todo = (): JSX.Element => {
  interface ITodo {
    content: string;
    isComplete: boolean;
  }

  const [list, setList] = useState<ITodo[]>([]);
  // const clicktest = () => {
  //   useCallback(() => {
  //     setList([...list, { content: "asd", isComplete: false }]);
  //   }, []);
  // };

  return (
    <div>
      <button
        onClick={() => {
          setList([...list, { content: "asd", isComplete: false }]);
        }}
      >
        버튼
      </button>
      {list.map((item, idx) => (
        <div key={idx}>{item.content}</div>
      ))}
    </div>
  );
};

export default Todo;
