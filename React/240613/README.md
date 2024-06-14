리액트는 라이브러리가 아니라 프레임 워크
예전에는 프론트엔드 기능만 제공
추가 라이브러리를 사용했다

리액트는 설치할때 라이브러리 여러개를 가지고있음
Next.js

# React

- 작성된 코드를 JS문법에 맞게 수정해줘야 한다.
  - 이렇게 코드를 바궈주는것을 뭐라고 할까?

# Compiler

- 작성한 코드를 기계어로 바꾸는 프로그램
- JS는 인터프리터 언어 -> 컴파일 단계가 따로 있지않고 실행과 동시에 이루어진다.
- React에서 사용하는 언어가 JS일까 -> JS + HTML -> JSX : JaveScript Extension 자바스크립트 확장형

# babel

# babel 실습

```bash
npm init -y
npm i -D @babel/core @babel/cli

npx babel src --out-dir dist1 # 첫 바벨 사용, 뭘로 바꿀지 알려주지않아서 그대로 반영

npm i -D @babel/preset-env
npx babel src --out-dir dist2 --presets=@babel/preset-env

# babel.config.json 파일 추가
# 파일안에 {"presets": ["@babel/preset-env"]} 추가함

npx babel src --out-dir dist3
npx babel src -d dist3 # 줄여서 이렇게 적음

# package.json의 스크립트 안에 "build": "babel src -d dist"

npm run build # build 적은거 실행하기
```

# typescript

```bash
npm i -D typescript

npx tsc #TypeScript Compiler

# babel에서 TS 컴파일
npm i -D @babel/preset-typescript
```

## Virtual DOM(React에서 매우 중요)

Virtual DOM => DOM을 복사해서 가져온것
Virtual DOM이 새로바뀌면 기존 DOM이랑 비교
Virtual DOM에서 달라진 부분만 적용

예시

```js
num = 1;
document.getElementById("test").innerHTML = `<div>${num}</div>`;
num = 2;
document.getElementById("test").innerHTML = `<div>${num}</div>`;
```

기존에는 div부터 전체를 바꿨다면 Virtual DOM은 num하나만 바꾸게 됨

State(상태값)
단순히 let a=1;, a=2는 스테이터스가 아님
setState({a:1})
DOM에 적용
적용후 setState({a:1}) 해도 적용안됨
setState({a:2}) 라면 적용됨

Props(부모가 전달해준 데이터) Mount(중간에 넣기) Update Unmount(빼기)

Component Life Cycle
Mount -> Render -> ComponentDidMount

Update -> Render -> ComponentDidUpdate

Unmount -> Render ComponentWillUnmount

여기서 Render은 DOM에 적용한다는 의미
공식문서에서 render은 DOM에 추가한다는 의미

Component(Class) 안에는 State, HTML, Function이 들어가있음
Component는 object 여러가지 정보를 가지고있음
