import React from "react";
import Todo, { ITodo } from "./Components/Todo";
import Add from "./Components/Add";

interface IProps {}
interface ASDF {
  asdf: number[];
  zxcv: string[];
}
interface IState<T> {
  list: T[];
}

const test1234: number = 12;
const test123: ASDF = { asdf: [123, 124], zxcv: ["asd"] };
const test12345: ASDF = { asdf: [123, 124], zxcv: ["asd"] };
const arr123: (number | string)[] = [];
const arr1234: Array<string | number> = [];

// <T> << Generic: T 제네릭
class App extends React.Component<IProps, IState<ITodo>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [] };
  }

  // componentDidMount(): void {
  //   this.setState((state: IState<ITodo>) => ({
  //     ...state,
  //     list: [
  //       ...state.list,
  //       { content: "그제 점심은?", isComplete: false },
  //       { content: "어제 점심은?", isComplete: false },
  //       { content: "오늘 점심은?", isComplete: false },
  //       { content: "내일 점심은?", isComplete: false },
  //       { content: "글피 점심은?", isComplete: false },
  //     ],
  //   }));
  // }
  complete(idx: number) {
    console.log(idx);
    this.setState((state: IState<ITodo>) => {
      state.list[idx].isComplete = !state.list[idx].isComplete;
      return state;
      // return {...state, list: [...state.list]}
    });
  }

  add = (content: string): void => {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: [...state.list, { content, isComplete: false }],
    }));
  };

  remove(idx: number) {
    this.setState((state: IState<ITodo>) => ({
      ...this.state,
      list: state.list.filter((_, i: number) => i != idx),
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        {/* {["string", "string", "string", "string", "string", "string"]} */}
        <Add add={this.add}></Add>
        <div>
          {this.state.list.map((item: ITodo, idx: number) => (
            <Todo
              key={idx}
              item={item}
              id={`todo-complete-${idx}`}
              complete={() => this.complete(idx)}
              remove={() => this.remove(idx)}
            ></Todo> // 부모가 보내준걸 어떻게 쓸지 여기에 추가하려면 todo에 iprops에서 타입지정 추가 해야됨
          ))}
        </div>
      </div>
    );
  }
}

export default App;
