# NPM

- nvm => node version manager
- npm => node package manager
  - project 개념으로 관리하기 시작한다
  - folder로 project를 나눈다. => package.json

```json
{
  "name": "asdf"
}
```

## init

- 첫 세팅 명령어

description : 설명
entry point : server.js
test command
키워드 : 배포할때 어떤 키워드로 검색할지
author : 작업자
라이센스 : isc(기본) MIT

하면 노드js에서 라이브러리 설치 준비끝
name = 폴더명

## install | i

- npm 페이지에 포함된 package(라이브러리)를 설치한다

```bash
npm i express
```

- npm i 설치할 패키지명

  ```bash
  added 64 packages, and audited 65 packages in 825ms

  12 packages are looking for funding
  run `npm fund` for details

  found 0 vulnerabilities
  ```

  익스프레스를 설치해서 패키지락이 생성됨(익스프레스 사용하는데 필요)

.gitignore 하면 안에 폴더를 깃에 안올림

깃에서 클론하면 'npm i' 입력시 노드모듈을 받아옴
뒤에 이름이없기때문에 자동으로 디펜던시즈안에있는것을 찾아서 다운함

npm init
"start": "node server"
"main": "server.js",

npm i express

지울때 npm remove 이름
