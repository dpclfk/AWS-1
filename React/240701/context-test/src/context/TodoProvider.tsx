import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

export interface Todo {
  id: number;
  content: string;
  isComplete: boolean;
}

export interface TodoListState {
  todoList: Todo[];
}

const initialState: TodoListState = {
  todoList: [],
};
// initialize : 초기화 / initialState : 초기값

type Action =
  | {
      type: "ADDTODO"; // 이렇게하면 이값 제외한 다른 스트링 안들어감
      payload: { content: string }; // 뭔값을 넣을지 모르니 타입만 넣어줌
    }
  | {
      type: "REMOVETODO";
      payload: { id: number }; // id값만 받아서 처리
    }
  | {
      type: "TOGGLETODO";
      payload: { id: number };
    };

let nowId = 0;

const reducer = (state: TodoListState, action: Action): TodoListState => {
  switch (action.type) {
    case "ADDTODO":
      nowId++;
      return {
        ...state,
        todoList: [...state.todoList, { ...action.payload, id: nowId, isComplete: false }],
      };
    case "REMOVETODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo: Todo) => todo.id !== action.payload.id),
      };
    case "TOGGLETODO":
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id !== action.payload.id) return todo;
          else return { ...todo, isComplete: !todo.isComplete };
        }),
      };
    default:
      return state;
  }
  // if (action.type == "ADDTODO") {
  //   return { ...state, todoList: [...state.todoList, action.payload] };
  // }
  // if (action.type == "REMOVETODO") {
  //   return {
  //     ...state,
  //     todoList: state.todoList.filter((todo: Todo) => todo.id !== action.payload.id),
  //   };
  // }
  // if (action.type == "TOGGLETODO") {
  //   return {
  //     ...state,
  //     todoList: state.todoList.map((todo: Todo) => {
  //       if (todo.id !== action.payload.id) return todo;
  //       else return { ...todo, isComplete: !todo.isComplate };
  //     }),
  //   };
  // }

  // return state;
};

interface TodoContetxtProps {
  state: TodoListState;
  dispatch: Dispatch<Action>;
}

const TodoContetxt = createContext<TodoContetxtProps | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <TodoContetxt.Provider value={{ state, dispatch }}>{children}</TodoContetxt.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContetxt);
  if (context === undefined) {
    throw new Error("now loading");
  }
  return context;
};

export default TodoContetxt;
