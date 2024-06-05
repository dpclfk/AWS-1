// hash라는 건 단방향 암호화를 얘기한다.
// hash : 칼질하다.
// 유일값으로 변경된다.
//  - a => a1
// 언제 쓸까?
//  - 개인정보 저장할 때

import crypto from "crypto";
// 암호화에 대한 내장 모듈

// const hashAlgorithm = crypto.createHash("sha256");
// // hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나
// const hashing = crypto.createHash("sha256").update("비밀번호를 입력하세요.");
const hashedString = crypto.createHash("sha256").update("비밀번호를 입력하세요.").digest("hex");
console.log("st1 : " + hashedString);

const hashAlgorithm2 = crypto.createHash("sha256");
// hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나
const hashing2 = hashAlgorithm2.update("비밀번호를 입력하세요");
const hashedString2 = hashing2.digest("hex");
console.log("st2 : " + hashedString2);
// sha256 => 256 bits => 32 bytes => 64글자
// 최대갯수 2 ** 256 => 요즘은 컴퓨터가 빨라서 이걸 다 넣어두고 찾는 방법도 있다.
// - 레인보우 테이블

const hashAlgorithm3 = crypto.createHash("sha512");
const hashing3 = hashAlgorithm3.update("비밀번호를 입력하세요");
const hashedString3 = hashing3.digest("hex");
console.log("st3 : " + hashedString3);
// 종류 : MD5, SHA-1, SHA-2(SHA-256), SHA-512

const salt = "asfasfasfas";
const hashAlgorithm4 = crypto.createHash("sha512");
const hashing4 = hashAlgorithm4.update("비밀번호를 입력하세요" + salt);
const hashedString4 = hashing4.digest("hex");
console.log("st4 : " + hashedString4);

// salt, 소금, 암호화에 있어서 의미 없는, 필요 없는 등의 문자열을 포함하여 진행한다.
//  - 해커가 쉽게 암호를 추측할 수 없게 만든다.
//  - 각 솔트가 다 다르게 넣는 게 일반적이다.

// 키 스트레칭 : 해시화를 반복한다.
// pbkdf2, bcrypt, scrypt
// bcrypt : 가장 기본적인 키 스트레칭 암호화 함수
// pbkdf2 : 가장 많이 사용되는 암호화 함수
// scrypt : 요즘 뜨는 함수

const salt2 = (await crypto.randomBytes(64)).toString("base64");

crypto.pbkdf2(
  "비밀번호를 입력", // 암호화할 데이터
  salt2, // 소금
  1000, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512", // 암호화 알고리즘
  (err, key) => {
    // 함수, 콜백함수, pbkdf2 메서드가 언제 끝날지 모른다.
    console.log("key :", key.toString("hex"));
  }
);

// 비동기가 아니라 동기로 실행
const pbkdf2 = crypto.pbkdf2Sync(
  "비밀번호를 입력", // 암호화할 데이터
  salt2, // 소금
  1000, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512" // 암호화 알고리즘
);
console.log("pbkdf2 :", pbkdf2.toString("hex"));

// Hash는 생각보다 중요한 개념이다.
// HashMap
