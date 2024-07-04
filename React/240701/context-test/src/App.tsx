import { useCallback, useState } from "react";
import { Todo, useTodoContext } from "./context/TodoProvider";
import Add from "./Componts/Add";
import List from "./Componts/List";

const App = (): JSX.Element => {
  // const [list, setList]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState<
  //   string[]
  // >([]);

  // const { state, dispatch } = useTodoContext();
  // console.log(state);

  // const addTodo = useCallback(() => {
  //   dispatch({ type: "ADDTODO", payload: { id: 1, content: "testing", isComplate: false } });
  // }, []);

  // return (
  //   <div>
  //     <button onClick={addTodo}>추가</button>
  //     {state.todoList.map((item: Todo, idx: number) => (
  //       <div key={idx}>{item.content}</div>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      <Add /> <List />
    </div>
  );
};

export default App;
