import { FC } from "react";
import List from "./List";
import Add from "../../Containers/Todo/Add";
import { IProps as IListProps } from "./List";
import { IProps as IAddProps } from "../../Containers/Todo/Add";

export interface IProps extends IListProps, IAddProps {}

const Todo: FC<IProps> = ({ list, complete, removeItem, addItem }) => {
  return (
    <div>
      <Add addItem={addItem} />
      <List list={list} complete={complete} removeItem={removeItem} />
    </div>
  );
};

export default Todo;
