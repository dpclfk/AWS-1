import count from "./count";
import "./css/index.scss";
import axios from "axios";

// (async () => {
//   const data = await axios.get("http://naver.com");
//   console.log(data);
// })();

(async () => {
  const axtest = await axios.get(`https://developer-lostark.game.onstove.com/markets/options`, {
    headers: {
      accept: "application/json",
      authorization:
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxODA5NDYifQ.EAgfqIie2uz4WRGvmPVqobHdRMiOQ55RKBiLUYM7piMRz9FsEa0bvgMKAGHwGOHy3R4RkvuknrlRz4ZlZmJ01PYe8StSKGxaDQ48ftzNPVlRPdGXYPoFGqZS96QOwe7z5dXzW8nA72faJdKU5jfkE5TmNG5m5ZiKC2u8ZgbELMNTz28rjBASzIxfvmtf6Bg0lJ0XZoaBOPzyoas0rm8EniKzhFZbiegcJJMsmIqyBRdwA6ZEPKXK5q8DxRhgCCr9SEdPwYA8efv0hezS6oLXI3qocAomHBetn5PMpbwh60USO6H6Ed985JNwYJMnq_uwD8VIMa5JUQkHLJJkPYp3Bw",
    },
  });
  console.log(axtest);
})();

const countElem: HTMLSpanElement = document.getElementById("count");
countElem.innerHTML = `${count.getCount()}`;
countElem.classList.add("even");

// void는 함수 실행은 하는데 결과를 메모리 어디에도 저장하지않음
document.getElementById("count-btn").onclick = (e: PointerEvent): void => {
  countElem.innerHTML = count.increment().toString();

  if (count.getCount() % 2) {
    countElem.classList.remove("even");
    countElem.classList.add("odd");
  } else {
    countElem.classList.remove("odd");
    countElem.classList.add("even");
  }
  if (count.getCount().toString().indexOf("3") != -1) {
    countElem.classList.add("third");
  } else if (countElem.classList.contains("third")) {
    countElem.classList.remove("third");
  }
};
