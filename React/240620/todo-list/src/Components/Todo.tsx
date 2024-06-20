import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
  id: string;
  complete(): void;
  remove(): void;
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
    const {
      id,
      item: { content, isComplete },
      complete,
      remove,
    } = this.props;
    return (
      <div className="flex justify-between items-center gap-2 p-1 border-b border-dashed border-black">
        <div className="flex-1">{content}</div>
        <label
          htmlFor={id}
          className={[
            "has-[:checked]:bg-yellow-300",
            "border",
            "border-gray-400",
            "rounded has-[:checked]:text-red-700",
            "p-1 px-2 select-none",
          ].join(" ")}
        >
          {this.props.item.isComplete ? "완료" : "진행중"}
          <input
            id={id}
            type="checkbox"
            className="hidden"
            checked={isComplete}
            onChange={complete}
          />
        </label>

        <button
          onClick={remove}
          className="border border-gray-400 rounded-[8px] bg-gray-200 p-1 px-2 select-none"
        >
          삭제
        </button>
      </div> // 리액트에서 js 입력하려면 {}로 안에 넣으면 가능함
    );
  }
}
export default Todo;

// new Todo({item:{}})
