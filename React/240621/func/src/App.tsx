import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Test from "./Components/Test";

// componentDidMount
// componentDidUpdate
// componentWillUnmount
// 훅에서는 위 3개를 useEffect 하나로 사용가능

function App(): JSX.Element {
  const [test, setTest]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    // Dispatch : 액션을 실행하는 메서드 타입
    // SetStateAction : 상태값을 업데이트하는 액션의 메서드 타입
  ] = useState<boolean>(true);
  // useState => Hook
  // use***** => 함수형 컴포넌트에서 사용하는 Hook
  // const isMount = false;
  // console.log(test);
  // // const test1 = "test"; // 언제 할당될까? 다시 실행될때
  // let test2 = "test"; // 렌더링 실행할때마다 할당, State는 재할당 개념이 아님
  // // 변수로 쓰면 안되는이유 : 재할당 되기때문, 프론트에서 안바뀜
  // console.log(test2);

  const [test1, setTest1] = useState<string>("");

  // componentDidMount
  // componentDidUpdate
  // 항상 실행된다. (render) 돌릴때 마다
  // 사용 X
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // componentDidMount
  // 어떤게 변환되더라도 실행하지 않는다.
  useEffect(() => {
    console.log("Mount");
  }, []);

  // componentDidMount
  // componentDidUpdate
  useEffect(() => {
    console.log("testing1");
    // return () => {
    //   console.log("testing???");
    // };
  }, [test1]);
  // test1이 변경되었을때는 실행되지 않는다.
  // 2번째 인자인 state[]이 변경 되었을 때 실행된다.
  // 여기서 return으로 willUnmount를 하게되면 변경 되었을때 삭제되었다고 인식

  return (
    <div className="container mx-auto">
      <div
        className="border"
        onMouseOver={() => {
          setTest(!test);
          // {() => {
          // }}
          // test = !test;
          // 이렇게하면 변경이 안된다
          // console.log(test);
          // test2 = "test2";
          // 다시 렌더링 돌리기전에는 test값이 안바뀜
        }}
        onMouseOut={() => {
          setTest(!test);
        }}
      >
        test
      </div>
      {/* {isMount ? <Test></Test> : <></>} */}
      {test && <Test></Test>}
      {/* 만드는건 Mount, 삭제하는건 Unmount */}
      <input
        type="text"
        value={test1}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setTest1(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
