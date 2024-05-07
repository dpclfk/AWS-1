const str = "안녕하세요. 타입스크립트?";
console.log(str);

let num = "1";
console.log(num);
// num = 1  위에서 스트링으로 넣었으면 다음에도 스트링 넣어야됨
// 숫자로 넣었으면 다음에도 숫자로 넣어야됨

const add = (a: number, b: number): number => a + b;

// const addStr = (a: string, b: number): string => a + b;

const addStr = (a: any, b: any): any => a + b;

console.log(add(1, 2));
const temp: { a: number } = { a: 1 };
