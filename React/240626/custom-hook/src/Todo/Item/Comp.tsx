import { FC } from "react";
// import { IProps } from "./index";
import { Todo } from "../../hooks/todoList";

export interface IProps {
  todo: Todo;
  removeTodo: () => void;
  completeTodo: () => void;
  idx: number;
}

const Item: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-1 border-b border-dashed border-black">
      <div>{todo.priority}</div>
      <div className="flex-1">{todo.content}</div>
      <div>{todo.createdAt}</div>
      <div>{todo.limit}</div>
      {/* <div> */}
      <label
        htmlFor={`item-${idx}`}
        className={[
          "has-[:checked]:bg-yellow-300",
          "border",
          "border-gray-400",
          "rounded has-[:checked]:text-red-700",
          "p-1 px-2 select-none",
        ].join(" ")}
      >
        {todo.isComplete ? "완료" : "진행중"}
        <input
          id={`item-${idx}`}
          type="checkbox"
          className="hidden"
          checked={todo.isComplete}
          onChange={completeTodo}
        />
      </label>
      <button
        className="border border-gray-400 rounded-[8px] bg-gray-200 p-1 px-2 select-none"
        onClick={removeTodo}
      >
        삭제
      </button>
    </div>
  );
};

export default Item;
