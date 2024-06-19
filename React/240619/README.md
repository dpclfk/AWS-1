# Todo List

```bash
npm list -g # create-react-app
create-react-app todo-list --template typescript
cd todo-list
npm start
```

scss가 안되는걸 어떻게 판단할까?
package.json으로 확인

리액트 설치하면서 웹팩 세팅, 그러나 package.json에는 webpack내용이 없다
이미 최적화를 다 끝냈기 때문에 숨겨둔것
eject는 사용자가 마음대로 건들지못하게 숨겨둔것을 풀어준다.

- SCSS 적용
  scss,sass는 노드버전 따라감

```bash
npm i sass
npm i tailwindcss
npx tailwindcss init # 부트 스트랩과 비슷한애

```

tailwindcss 를 scss에 적용
@tailwind base;
@tailwind components;
@tailwind utilities;
하면 노란줄이 뜬다
확장 프로그램으로 PostCSS Language Support 설치

tailwindcss는 부트스트랩처럼 class로 css를 적용한다

```제네릭
배열의 타입을 알수없는데 타입을 any로 적어야 할까?
class Test로 타입을 줄 수 없다

class Test<T> {
  list: T[] = [];
}
new Test<number>();

제네릭으로 아래에서 타입을 줄 수 있다
class Test<T> {
  temp:T = new T();
} 사용 불가능

<IProps, IState> 에서 SS는 스냅샷
```

StrictMode 원격모드라고하는데 2번불러온다.

# React without typescript

```bash
create-react-app todo-list-js
npm i tailwindcss
npx tailwindcss init
```
