HTML을 브라우저에서 어떻게 읽어낼까
window객체를 만든다 -> HTML 파일(문서)를 받아온다 -> DOM 객체를 만든다(document) -> DOM에 HTML파일의 내용을 하나하나 적용한다.
-> script 엘리먼트 인가? yes -> Javascript Runtime의 EnentLoop에게 코드를 전달 -> JS코드가 EventLoop에서 실행된다.(feat. Javascript Runtime)

- style 엘리먼트 인가? yes -> CSS 스타일을 DOM에 적용한다.
- link 엘리먼트 인가? yes -> CSS 파일을 가져온다. -> CSS 스타일을 DOM에 적용한다.
- HTML 파일을 모두 읽었는가 yes -> 정리된 DOM 객체를 가지고 브라우저 화면에 출력을 위해 계산한다. -> 출력한다.

JavaScript Runtime안에

Javascript Engine 안에

- CallStack
  - 실행 컨텍스트
    - Record(변수저장), Outer(할당이 어디서 됐는지)
- MemoryHeap

Web API

- setTimeout
- setInterval
- Proise
- window
- ajax

Nodejs의 전역객체 == global

디자인 패턴
-> 자료구조 + 알고리즘

MVC
Model -> DB 관련
View 리액트
Control 백엔드 서버
