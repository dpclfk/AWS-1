```bash
npm init -y
npm i -D typescript
npx tsc --init # tsconfig.json 생성

npm i express
npm i -D @types/node @types/express

npx tsc
node build/server.js

npm i -D ts-node
npx ts-node src/server.ts

```

```json
{
  "rootDir": "./src",
  "outDir": "./build"
}
```

package.json 변경관련

start : ts-node build/server.js

npx ts-node src/server.ts 실행

package.json에 "nodemonConfig": {"watch": "./src/\*_/_"}를 넣으면 src폴더안에있는게 바뀌었을때만 재실행
