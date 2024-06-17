# babel

- 코드변환 -> 컴파일러
- ts, ES6 등등 브라우저 등이 읽지못할 코드를 읽을수 있는 JS, ES5코드로 변환

# Webpack

- HRML, CSS, JS 등등을 모두 하나로 묶어서 내보내 준다.
- 번들링 라이브러리
- TS 가능, Babel을 의존성으로 가진다
- 여러 라이브러리를 함께 사용해서 하나의 묶음으로 내보낼수 있다.
- 난독화를 포함 -> 애초에 사람이 읽을 수 없게 만든다.
- 리액트에 있기때문에 직접적으로 다룰일이 거의없다.

## Test

```bash
npm init -y
npm i -D webpack webpack-cli

npx webpack --mode=development
npx webpack --mode=production
npx webpack init # PWA 웹 애플리케이션
#sass는 css의 종류

npm run serve #서버 시작
# 포트는 기본적으로 8080, webpack.config.js 파일내에 devServer: { 안에 port:9000으로 하면 9000포트로 열림
npm run build
```

```bash

npx webpack init
# npm init후 선택사항
y
ts
yyn
sass
yy only
y
npm
y
# 여기까지
```
