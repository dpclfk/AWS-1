import { FC } from "react";

import Item from "./Item";
import { Todo as Todolib } from "../lib/Todo";
export interface IProps {
  list: Todolib[];
}

const List: FC<IProps> = ({ list }) => {
  return (
    <>
      {list.map((item, idx) => (
        <div>
          <Item item={item} idx={idx} />
        </div>
      ))}
    </>
  );
};

export default List;
