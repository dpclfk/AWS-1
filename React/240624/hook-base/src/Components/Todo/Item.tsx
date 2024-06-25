import { FC, FormEvent, useMemo } from "react";
import { Todo as TodoItem } from "../../lib/Todo";

export interface IProps {
  item: TodoItem;
  idx: number;
  complete(): void;
  removeItem(): void;
}

const Item: FC<IProps> = ({ item, idx, complete, removeItem }) => {
  const isComplete: string = useMemo(
    () => (item.getIsComplete() ? "완료" : "진행중"),
    [item.getIsComplete()]
  );
  return (
    <div className="flex justify-between items-center gap-2 p-1 border-b border-dashed border-black">
      <div>{item.getPriority()}</div>
      <div className="flex-1">{item.getContent()}</div>
      <div>{item.getCreatedAt()}</div>
      <div>{item.getLimit()}</div>
      <div>
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
          {item.getIsComplete() ? "완료" : "진행중"}
          <input
            id={`item-${idx}`}
            type="checkbox"
            className="hidden"
            checked={item.getIsComplete()}
            onChange={complete}
          />
        </label>
        <button
          className="border border-gray-400 rounded-[8px] bg-gray-200 p-1 px-2 select-none"
          onClick={removeItem}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default Item;
