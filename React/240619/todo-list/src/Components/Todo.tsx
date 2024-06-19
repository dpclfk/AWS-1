import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
}

// interface IProps {
//   item: {
//     content: string;
//     isComplete: boolean;
//   };
// }

interface IState {}

// Component? 클래스
// Component 타입을 정해야하는데 알수없다.
// 그래서 제네릭 사용
class Todo extends Component<IProps, IState> {
  componentDidMount(): void {
    console.log(this.props);
  }
  render(): ReactNode {
    return <div> Todo Item</div>;
  }
}
export default Todo;

// new Todo({item:{}})
