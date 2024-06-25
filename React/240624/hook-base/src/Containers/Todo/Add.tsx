import { ChangeEvent, FC, useCallback, useState } from "react";
import AddComp from "../../Components/Todo/Add";

// export interface IProps {
//   add(content: string): void;
// }

export interface IProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Add: FC<IProps> = ({ addItem }) => {
  const [content, setCount] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setCount(value);
  }, []);

  const changePriority = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const temp = +value;
    if (!isNaN(temp)) setPriority(temp);
    // e 무리수 << 숫자
    // NaN 숫자 취급 typeof NaN == number
  }, []);

  const changeLimit = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setLimit(value);
  }, []);

  const submit = useCallback(() => {
    addItem(content, priority, limit);
    setCount("");
    setPriority(0);
    setLimit("");
  }, [content, priority, limit]);

  return (
    <AddComp
      content={content}
      priority={priority}
      limit={limit}
      changeConntent={changeContent}
      chanPriority={changePriority}
      changeLimit={changeLimit}
      submit={submit}
    />
  );
};

export default Add;
