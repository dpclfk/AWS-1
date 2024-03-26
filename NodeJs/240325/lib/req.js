const parseHeader = (str) => {
  const arr = str.split("\r\n");
  const [method, path, protocol] = arr[0].split(" ");
  let tempIdx = path.indexOf("?");
  if (tempIdx == -1) tempIdx = path.length;
  const temp = { method, path: path.slice(0, tempIdx), protocol };
  console.log(temp.path);

  if (path.indexOf("jpg") > -1) {
    temp.ext = "jpg";
  }
  if (path.indexOf("png") > -1) {
    temp.ext = "png";
  }

  for (let i = 1; i < arr.length; ++i) {
    const tempIdx = arr[i].indexOf(": ");
    temp[arr[i].slice(0, tempIdx)] = arr[i].slice(tempIdx + 2);
  }

  return temp;
};

const parseBody = (str) => {
  if (str.length == 0) return {};

  const body = {};
  const bodyArr = str.split("&"); //구분이 &표시라 &표시로 잘라라

  bodyArr.forEach((item) => {
    const [name, value] = item.split("=");
    body[name] = decodeURI(value);
  });

  return body;
};

const makeReq = (data) => {
  const tempStr = data.toString();
  console.log(tempStr);
  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");

  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};

module.exports = { makeReq };
