# Event Loop

-JS 어떻게 작동하는가?

```이벤트 루프(Event Loop)
브라우저(정식명칭은 이벤트루프)안에 JSEngine(V8,V8은엔진 이름임), Web APIS, CallbackQueue, Enent Loop
JSEngine안에 Callstack, MemoryHeap
CallStack안에 Execution Context라는게 생김(실행 컨텍스트)
코드가 실행컨텍스트를 실행시킴
실행컨텍스트 안에 Variable Environment
Web APIs안에 Window(BOM), setTimeout, setInterval, Ajax
```

## Web APIs

- 브라우저가 내부적으로 실행하고 있는 스레드
- setTimeout, setinterval과 같이 따로 실행되어야 하는 코드가 실행되고있음
- Ajax 라고 하는 기능도 포함(요청을 보내는 기능)
- 코드를 실행함에 있어서 기다리는것을 동기, 안기다리는것을 비동기 라고 한다.

# Event Loop

- 우리가 작성한 코드가 실행되는 곳

# JS가 실행되는 순서

- 코드를 한번 읽는다.
  - Execution Context(실행 컨텍스트)를 생성한다
  - Varialbe Environment에 변수, 함수들을 선언한다.
  ````javascript
  var a = 1;
   ```
  - 실행 컨텍스트가 생성된다.
  - variable Environment에 a라는 변수가 선언된다.
  Lexical Environmennt의 내용을 Lexcial Environment의 Environment Environment를 설정한다.
  - 외부 Lexkcal Environmnet가 무엇인지 Reference를 생성한다.
  ````

# 인터페이스 구현

- 인터페이스 == Interface(API)
