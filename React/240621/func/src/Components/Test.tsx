// export default function Test(): JSX.Element {
//   return <div>now Testing</div>;
// }
// 랜더 부분만 컴포넌트화

import { FC, useEffect, useState } from "react";
// Function Component
const Test: FC = () => {
  const [test, _] = useState<string>("now testing");

  useEffect(() => {
    console.log("Test Component Mounted");
    return () => {
      console.log("Test Component Will Mount");
    };
    // return으로 반환하는 method가 componentWillUnmount다
    // 언제 쓰면 좋을까? socket 통신
  }, []);

  // const [a, b] = useState("asdf");
  // b("qwer"); 선언하고 바로 실행하기 때문에 무한로딩
  // console.log(a);
  return (
    <div
    // onClick={() => {
    //   b("asd");
    // }}
    >
      {test}
      {/* {a} */}
    </div>
  );
};

export default Test;
