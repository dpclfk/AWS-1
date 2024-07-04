import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  getServerList,
  testbtn,
  todoCount,
  todoFilter,
  todoList,
  todoListState,
  uploadtest,
} from "../context/todo";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const Todo = (): JSX.Element => {
  // const [list, setList] = useRecoilState(todoList);
  const list = useRecoilValue(todoList);
  // 값만 가져옴
  const setList = useSetRecoilState(todoListState);
  // console.log(list);
  const listCount = useRecoilValue(todoCount);
  const [filter, setFilter] = useRecoilState(todoFilter);

  const getServer = useRecoilValue(getServerList);
  // const postServer = useRecoilValue(postServerList);
  const btntest = useRecoilValue(testbtn);
  const setbtntest = useSetRecoilState(testbtn);

  const uptest = useRecoilValue(uploadtest);
  // const uptest = useSetRecoilState(uploadtest);

  // useEffect(() => {
  //   // useRecoilValue(uploadtest);
  //   setList(uploadtest);

  // }, [uploadtest]);

  useEffect(() => {
    setList(getServer);
  }, [getServer]);

  // const [content, setContent] = useState<string>("");
  // const changeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setContent(e.target.value);
  // }, []);

  const changebtn = (e: ChangeEvent<HTMLInputElement>) => {
    setbtntest(e.target.value);
  };

  // const uploadtests = useEffect(() => {
  //   useRecoilValue(uploadtest);
  // }, []);

  // const bttest = () => {
  // axios.post("http://localhost:3080/api/todo", { content: content });
  // useRecoilValue(uploadtest);
  // setContent("");
  // setList(getServer);
  // };

  // const bttest = useCallback(() => {
  //   useRecoilValue(uploadtest);
  // }, []);

  const changeFilter = () => {
    switch (filter) {
      case "complete":
        setFilter("progress");
        break;
      case "progress":
        setFilter("all");
        break;
      case "all":
      default:
        setFilter("complete");
    }
  };

  return (
    <div>
      <button onClick={changeFilter}>{filter}</button>:{listCount}
      <div>
        {list.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
        <input
          className="border-black"
          type="text"
          value={btntest}
          onInput={changebtn}
          placeholder="content"
        />
        <button onClick={() => uptest}>버튼</button>
      </div>
    </div>
  );
};

export default Todo;
