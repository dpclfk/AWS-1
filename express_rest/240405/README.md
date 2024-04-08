1. server에서 위에서부터 순서대로 파일을읽음
2. 폴더로 들어갈경우 기본적으로 index파일을 찾음
   2-1. static은 index.html을 찾음 못찾을경우 계속 아래로(next())내려감
3. router의 경우 index.js파일을 찾아서 읽게됨
   3-1. 브라우저는 get 메서드만 보내므로 router.post일경우 읽지못함
   3-2.
   const user = require("./user");
   router.use("/user", user);는 주소가 /user일경우 해당폴더의 user.js파일을 찾아감
   다만 user.js 안에 router.get("/")이 없으면 받아올수 없음
