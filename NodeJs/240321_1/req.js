const makeReq = (data) => {
  const tempArr = data.toString().split("\r\n"); //데이터를 문자로 바꿔서 줄바꿈마다 잘라줌
  const [method, path, protocol] = tempArr[0].split(" "); //띄어쓰기를 기준으로 넣어줌
  const temp = { method, path, protocol }; //템프를 만들어서 첫번째줄 가져온걸 넣어줌
  // [GET, /favicon.ico, HTTP/1.1]  겟은매서드, 페스는 파일경로, 프로토콜
  // Host: localhost:3000
  // Connection: keep-alive
  // sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"
  // sec-ch-ua-mobile: ?0
  // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36
  // sec-ch-ua-platform: "macOS"
  // Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8
  // Sec-Fetch-Site: same-origin
  // Sec-Fetch-Mode: no-cors
  // Sec-Fetch-Dest: image
  // Referer: http://localhost:3000/test
  // Accept-Encoding: gzip, deflate, br, zstd
  // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
  //
  // {body}
  let i = 1;
  for (; i < tempArr.length; ++i) {
    if (tempArr[i].length == 0) break; //빈스트링(바디위)면 멈춤
    const tempIdx = tempArr[i].indexOf(": "); //처음들어간 위치를 찾음
    temp[tempArr[i].slice(0, tempIdx)] = tempArr[i].slice(tempIdx + 2);
  }

  console.log(tempArr[i + 1]);
  // if(tempArr[i+1].length>0)
  const body = {};
  // id=123&pw=123
  const bodyArr = tempArr[i + 1].split("&"); //구분이 &표시라 &표시로 잘라라
  //["id=123", "pw=123"]
  bodyArr.forEach((item) => {
    // "id=123"
    const tempArr = item.split("=");
    // ["id","123"]
    body[tempArr[0]] = decodeURI(tempArr[1]);
    //한글로넣으면 이상하게 나옴(주소창처럼)그래서 바꿔주는것
  });
  temp.body = body;
  return temp;
};

module.exports = { makeReq };
