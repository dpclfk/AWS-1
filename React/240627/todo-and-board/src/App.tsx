import React, { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Todo from "./Compontents/Todo";
import Board from "./Compontents/Board/Container";
import path from "path";

const App: FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex px-4 py-2 gap-4">
          <LinkButton path={"/"}>게시판</LinkButton>
          <LinkButton path={"/todo"}>목록</LinkButton>
          {/* <li>
            <Link to={"/"}>
              <button className="boarder px-4 py-2 border rounded-md border-black">게시판</button>
            </Link>
          </li>
          <li>
            <Link to={"/todo"}>
              <button>할일</button>
            </Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export const LinkButton: FC<{ path: string; children: string | JSX.Element | JSX.Element[] }> = ({
  path,
  children,
}) => {
  return (
    <li>
      <Link to={path}>
        <button className="boarder px-4 py-2 border rounded-md border-black">{children}</button>
      </Link>
    </li>
  );
};

export default App;
