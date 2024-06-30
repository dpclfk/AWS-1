import { createContext } from "react";

export interface ITodo {
  num: number;
  content: string;
  priority: number;
  limit: string;
}

export interface ITodoContext {
  list: ITodo[];
  addList: (todo: ITodo) => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);
// createContext => BrowserRouter 같이 컴포넌트를 하나 생성해준다. (Provider)
// Provider 컴포넌트의 자식들에서는 해당 훅(Context)를 사용할 수 있다.

// 커스텀 훅이랑 다른점?
// 커스텀 훅 : 호출해서 사용, 호출할때마다 새롭게 만들어짐
// useContext
