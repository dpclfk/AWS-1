import React from "react";
import Todo, { ITodo } from "./Components/Todo";

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

  componentDidMount(): void {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: [...state.list, { content: "오늘 점심은?", isComplete: false }],
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.list.map((item: ITodo, idx: number) => (
          <Todo key={idx} item={item}></Todo>
        ))}
      </div>
    );
  }
}

export default App;
