// 양방향 암호화 중 하나
// 대칭키 || 비대칭키
// 키 : 암호화 || 복호화 때 사용되는 열쇠
// 대칭키 : 양쪽의 키가 같다, 즉 하나의 키로 암호화와 복호화를 진행한다.

import crypto from "crypto";

const key = crypto.scryptSync("암호", "소금", 32);
console.log(key.length);

const iv = crypto.randomBytes(16);
// console.log(iv);
// initialization vector

// const iv = "<Buffer fe db 11 e2 ed 50 16 b0 4f ee 0d 43 96 0b 1a 13>";

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
let result = cipher.update("qwerasdfzxcvqwer1234@google.com", "utf-8", "hex");
result += cipher.final("hex");
console.log(result);

const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
let result2 = decipher.update(result, "hex", "utf-8");
// result2 += decipher.final("utf-8"); // hex대신 base64 암호화하면 필요
console.log(result2);
