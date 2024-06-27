import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { Routes, Route, Link } from "react-router-dom";
import Test from "./Components/Test";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="text-blue-600 visited:text-red-500">
              홈페이지
            </Link>
          </li>
          <li>
            <Link to={"/test"} className="text-blue-600">
              테스트
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>홈페이지</div>} />
        {/* <Route path="/test/*" element={<Test></Test>} /> */}
        <Route path="/test/*" Component={Test} />
      </Routes>
    </div>
  );
}

export default App;
