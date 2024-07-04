import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}

// 키는 변수명이랑 동일하게 넣어줌
// default : 초기값
export const todoListState = atom<ITodo[]>({
  //atom = usestate 2개의값, 값과 변경할 값
  key: "todoListState",
  default: [],
});
// dispatch, initialState
// useState랑 사용법이 거의 흡사

const todoFilterState = atom<string>({
  key: "todoFilterState",
  default: "all",
});

// export const todoList = selector<ITodo[]>({
//   key: "todoList",
//   get: ({}) => {
//     return [];
//   },
// });
export const todoList = selector<ITodo[]>({
  // selector 중간과정을 추가함
  key: "todoList",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete);
      case "progress":
        return list.filter((item) => !item.isComplete);
      case "all":
      default:
        return list;
    }
  },
});

// selector : reducer + action
export const todoCount = selector<number>({
  key: "todoCount",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete).length;
      case "progress":
        return list.filter((item) => !item.isComplete).length;
      case "all":
      default:
        return list.length;
    }
  },
});

export const todoFilter = selector<string>({
  key: "todoFilter",
  get: ({ get }) => {
    return get(todoFilterState);
  },
  set: ({ set }, value = "all") => {
    set(todoFilterState, value);
  },
});
