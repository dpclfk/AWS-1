// import { FC } from "react";
// import { IBoard } from "../Board/Comp";

import Item from "./Item";

// const List: FC<{ list: IBoard[] }> = ({ list }) => {
//   return <ul></ul>;
// };
// 아래처럼 사용하면 FC 사용불가

// <T,> T extends {} / <T>면 태그로 인식
// ist[0]["title"]은 인식 불가 / as keyof T => T에서 title라는 키를 가져오는것 / 키로 인식해서 가져와라

export interface ITitle<S> {
  key: keyof S;
  name: string;
  isStrech?: boolean;
}

interface IProps<T> {
  list: T[];
  titleList: ITitle<T>[];
}

const List = <T,>({ list, titleList }: IProps<T>): JSX.Element => {
  // console.log(list[0]["title" as keyof T]);
  return (
    <ul>
      <li>
        <ul className="flex justify-between">
          {titleList.map(({ name, isStrech = false }: ITitle<T>, idx: number) => (
            <li
              key={`title-${idx}`}
              className={`w-16 ${isStrech ? "flex-1 text-center" : "text-center"}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </li>
      {list.map((item: T, idx: number) => (
        <Item<T> key={`item-${idx}`} item={item} titleList={titleList} />
      ))}
      {/* <li>
        <ul className="flex justify-between">
          <li>1</li>
          <li>testing</li>
          <li>JKG</li>
          <li>2시간전</li>
        </ul>
      </li>
      <li>
        <ul className="flex justify-between">
          <li>1</li>
          <li>testing</li>
          <li>JKG</li>
          <li>2시간전</li>
        </ul>
      </li> */}
    </ul>
  );
};

export default List;
