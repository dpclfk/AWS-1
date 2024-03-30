# 평가문제

- Vinilaa JS만을 사용하시오.
  - 기본적인 JS만을 사용하시오
  - Library를 사용하지 못한다
- Node.js를 사용하시오
  -server를 만들고싶으면 Noed.js없이는 JS가 실행되지 않는다.

| path | Method | request | Response             |
| ---- | ------ | ------- | -------------------- |
| /    | GET    | Null    | 게시판 목록 웹페이지 |

- 끝에 "/"가 붙는경우는 상관없음

  - index.html을 생략하고 작성할수있다.
  - 게시판에 작성된 내용은 객체로 id, title, createdAt, text를 프로퍼티로 선언되어있다

  ```javascript
  const board = {
    id: 1, // 프로퍼티 => id <-name, 1<- value => property
    title: "토요일 보충",
    createdAt: "2024-03-30",
    text: "오늘 점심",
  };
  ```

  - 게시판 이라는건 게시글의 모음 => 게시글마다 데이터적으로 이름이 필요할까 ? => []/Array(배열)이면 충분하다.
  - 게시판 목록을 받아옴에 있어서 paging 기능이 필요하다. (게시판에 아래에 흔히 보이는 숫자들)

- 추가적인 기능에 대해서 APi를 작성하고 구현하시오.

  - 게시판에 프로퍼티로 추가되어야한다.
  - 요청솨 응답을 주고받으면서 데이터를 받을 때 함께 받을 수 있다.

        ```javascript
        const board = {
          id: 1, // 프로퍼티 => id <-name, 1<- value => property
          title: "토요일 보충",
          createdAt: "2024-03-30",
          text: "오늘 점심",
          like: 0,
          view: 0,
        };
        ```

    | path | Method | request        | Response                            |
    | ---- | ------ | -------------- | ----------------------------------- |
    | /    | GET    | Null           | 게시판 목록 웹페이지                |
    | /    | Post   | { page, count} | [{id, title, createdAt, like,view}] |

  - API 문서를 수정할 필요가 생겼다.

# JS는 어떻게 실행하는가?

- 브라우저에서는 html 문서 내에서 script 엘리먼트를 작성하고 src로 path를 전달하여 실행한다.
- 컴퓨터에서는 terminal에 node `path를 작성하여 명령을 내린다.
  - path => server.js

## JS는 어떤 언어일까?

- script언어, 한줄씩 읽어서 한줄씩 실행한다.
  - 우리가 JS가 어떻게 실행되는지 알려면 => 한줄씩 읽고 한줄씩 해적해보자.

# 코드리뷰

- 코드를 읽고 그것을 해석하고 공부하는 것
