import { FC } from "react";
import { Todo as Todolib } from "../lib/Todo";
export interface IProps {
  item: Todolib;
  idx: number;
}

const Item: FC<IProps> = ({ item }) => {
  return (
    <div>
      {/* <div>{list.content}</div>
      <div>{list.limit}</div>
      <div>{list.isComplete}</div> */}
      <div>{item.getcontent()}</div>
    </div>
  );
};

export default Item;
