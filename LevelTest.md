# div

- 영역을 나누기 위해 사용하는 HTML Tag
- divide

# p

- 글을 작성함에 있어 문단을 나타내는 Tag
- Paragraph

# a

- hyperLink가 생기는 태그
- hyperLink를 포함하여 다른 문서를 연결하는 Tag
- Anchor

# img

- 이미지 Tag

# ul / ol / li

- List Tag
- 순서가 중요하지 않은 리스트
- 순서를 나타내는 리스트
- ol과 ul의 직계 자식, 리스트 내의 목록을 나타내는 Tag

# Display

- 요소를 어떻게 보여줄지 설정
- 배치 방법 설정
- block, flex, none, inline, grid
- block, flex : 요소 자체의 배치 방법
- flex, grid: 요소의 자식에 대해 배치 방법

# Margin, Padding

- 외부 여백, 내부 여백

# Position

- 위치 기준 설정
- absolute, relative, static, sticky, fixed

# Box-sizing

- 영역의 크기에 대해 기준을 설정
- content | border

# 전역변수

- 프로젝트 기준으로 어디서나 사용할 수 있는 변수
- import, require를 하지않아도 사용할 수 있다.
- Node.js에서 사용하는 전역변수는 대표적으로 global이 있다.
- 브라우저에서는 window 객체를 전역으로 사용하기 때문에 {} (scope) 밖에서 선언, 할당, 초기화 된 변수는 모두 사용할 수 있다.
- Math, Number, String, Set, Symbol, console, ...

## Scope

- Function Scope, Block Scope,전역스코프, 지역스코프

# 지역변수

- 전역 변수가 아닌 모든 변수
- 특정 Scope에서만 사용할 수 있는 변수
- 함수 내에서 선언된 변수
- Node.js 상에서 파일 기준 변수들

# Function Declaration / Function Expression / ArrowFunction

## Function Declaration

- 함수 선언식
- 호이스팅

```js
function name() {}
```

## Function Expression

- 함수 표현식
- 호이스팅 막음

```js
const func = function(){}
const test => ()=>{}
const test2 = function test3(){}
```

## ArrowFunction

- 화살표 함수
- thisBinding 진행하지 않음

```js
() => {};
```

## 추가 질문

```js
const temp = {
  func1: () => {
    console.log(this); // temp의 상위 객체(window)
  },
  func2() {
    console.log(this); // temp
  },
  func3: function () {
    console.log(this); // temp
  },
};

var a = 2; //window.a 에 저장됨
function foo() {
  var a = 1;
}
foo();
console.log("a":, a)
// undefind 나오는 이유 : 호이스팅 때문에
```

# 사탕

```js
const scores = "";
function solution(scores) {
  var answer = 0;
  const arr = scores.split(" ").sort((a, b) => b - a);
  let scoreCount = 0;
  for (let i = 0, nowScore; scoreCount < 4; nowScore = arr[i], i++) {
    if (nowScore != arr[i]) {
      scoreCount++;
    }
    answer++;
  }
  return --answer;
}
```

# 행렬

```js
const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    answer.push([]);
    for (let j = 0; j < b[0].length; ++j) {
      let temp = 0;
      for (let k = 0; k < a[0].length; ++k) {
        temp += a[i][k] * b[k][j];
      }
      answer[i].push();
    }
  }
}
```
