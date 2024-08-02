import axios from "axios";
import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}

// 키는 변수명이랑 동일하게 넣어줌
// default : 초기값
export const todoListState = atom<ITodo[]>({
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

// export const postServerList = selector<string>({
//   key: "postServerList",
//   get: async () => {
//     await axios.post("http://localhost:3080/api/todo", { content: "asd" });
//     // console.log(data);
//     return "ok";
//   },
// });

const testbtnstate = atom<string>({
  key: "testbtnstate",
  default: "",
});

export const testbtn = selector<string>({
  key: "testbtn",
  get: ({ get }) => {
    return get(testbtnstate);
  },
  set: ({ set }, value = "") => {
    set(testbtnstate, value);
    // await axios.post("http://localhost:3080/api/todo", { content: testbtnstate });
  },
});

export const getServerList = selector<ITodo[]>({
  key: "getServerList",
  get: async () => {
    const { data } = await axios.get("http://localhost:3080/api/todo/1/d");
    console.log(data);
    return data;
  },
  // set: async ({ set }, value = "") => {
  //   const { data } = await axios.post("http://localhost:3080/api/todo", {
  //     content: set(testbtnstate, value),
  //   });
  //   return data;
  // },
});

export const uploadtest = selector<string>({
  key: "uploadtest",
  // get: ({ get }) => {
  //   return get(testbtnstate);
  // },
  get: async ({ get }) => {
    const { data } = await axios.post("http://localhost:3080/api/todo", {
      content: get(testbtnstate),
    });
    return data;
  },
});
