// const registFrom = document.getElementById("regist");
const registFrom = document.forms.regist;
// console.log(registFrom);

// form에서의 요청 보내기 == submit
const emailResultElem = document.getElementById("email-result");
const pwResultElem = document.getElementById("pw-result");
const checkResultElem = document.getElementById("pw-check-result");
const nickResultElem = document.getElementById("nick-result");

let isEmail = false,
  isPw = false,
  isCheck = false,
  isNick = false;

registFrom.email.oninput = (e) => {
  const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //RegExp
  if (!emailReg.test(e.target.value)) {
    emailResultElem.innerHTML = "이메일 형식을 지켜주세요";
    isEmail = false;
    // }
    // if (e.target.value.length < 10) {
    //   emailResultElem.innerHTML = "10글자이상 넣어주세요";
  } else {
    isEmail = true;
    emailResultElem.innerHTML = "";
  }
};

registFrom.pw.oninput = (e) => {
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/; //RegExp /뒤에 i 붙일경우 대소문자 상관없이 찾음
  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwResultElem.innerHTML = "비밀번호는 8 글자 이상, 30글자 이하로 작성하세요";
    isPw = false;
  } else if (!pwReg.test(e.target.value)) {
    pwResultElem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요";
    isPw = false;
  } else {
    isPw = true;
    pwResultElem.innerHTML = "";
  }
};

registFrom["pw-check"].oninput = (e) => {
  if (e.target.value != registFrom.pw.value) {
    checkResultElem.innerHTML = "다름";
    isCheck = false;
  } else {
    checkResultElem.innerHTML = "";
    isCheck = true;
  }
};

registFrom.nick.oninput = (e) => {
  const nickReg = /^[A-z0-9가-힣]{2,20}$/;
  if (e.target.value.length < 2 || e.target.value.length > 20) {
    nickResultElem.innerHTML = "닉네임은 2글사이상, 20글자 이하만 가능합니다.";
    isNick = false;
  } else if (!nickReg.test(e.target.value)) {
    nickResultElem.innerHTML = "특수문자는 사용이 불가능합니다.";
    isNick = false;
  } else {
    nickResultElem.innerHTML = "";
    isNick = true;
  }
};

registFrom.onsubmit = (e) => {
  e.preventDefault(); // 엘리먼트의 기본 기능을 멈춘다
  // console.log(registFrom.email.value);
  // console.log(registFrom.pw.value);
  // console.log(registFrom["pw-check"].value);
  // console.log(registFrom.nick.value);

  if (!(isEmail && isPw && isCheck && isNick)) {
    alert("내용 확인");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("post", "http://localhost:8000/user/regist");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(
    JSON.stringify({
      email: registFrom.email.value,
      pw: registFrom.pw.value,
      "pw-check": registFrom["pw-check"].value,
      nick: registFrom.nick.value,
    })
  );

  xhr.onload = () => {
    if (xhr.status == 200) {
      alert("성공!");
      location.href =
        "http://127.0.0.1:5500/AWS/AWS_Full/240508/Front/login/index.html";
    } else if (xhr.status == 400) {
      alert("비밀번호 확인!");
      //권한 문제로 거절
    } else if (xhr.status == 409) {
      alert("중복");
      // 기존 서버 정보와 충돌
    } else {
      alert("알 수 없는 오류 발생");
    }
  };
};
