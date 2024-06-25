import { FC, useCallback, useState } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
// 이름이 겹쳐서 TodoItem으로 바꿈
import TodoComp from "../../Components/Todo/Todo";
// 이름이 겹쳐도 default로 가져오면 as 쓰지않아도 됨

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setList] = useState<TodoItem[]>([new TodoItem("test", 1, "2024-06-30")]);

  // const complete = useCallback((idx: number) => {
  //   list[idx].setComplete();
  //   setList([...list]);
  // complete 메서드가 초기화되는 시기 => DidMount
  // }, []);
  // const complete = useCallback(idx: number) => {
  //   list[idx].setComplete();
  //   setList([...list]);
  // }
  // 두 메서드는 다를바가 없다
  // 매 render마다 새롭게 초기화

  const complete = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      list[idx].setComplete();
      return [...list];
    });
  }, []);

  // function complete(idx){
  //   setList((list: TodoItem[]) => {
  //     list[idx].setComplete();
  //     return [...list];
  //   });
  // }

  //onclick remove(idx)
  const removeItem = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      //[0,1,2,3]
      return list.filter((_, i: number) => i != idx);
    });
  }, []);

  const addItem = useCallback((content: string, priority: number, limit: string) => {
    setList((list: TodoItem[]) => [...list, new TodoItem(content, priority, limit)]);
  }, []);

  return <TodoComp list={list} complete={complete} removeItem={removeItem} addItem={addItem} />;
};

export default Todo;
