import App from "./App";

new App(document.getElementById("root"));

console.log("Hello World!");
let num: number;
// console.log(num);
// num = "1"; << 안됨//1을 할당함으로써 number Type을 강제한다.
// 1을 넣어주면 강제가 되지만 타입을안주고 let num; 상태에서는 str을 넣을수 있음

let numStr: string = "1";
// console.log(num == numStr);
// Type에 대해서 정확하고 명확하게

let obj: { a: number; b: string } = {
  a: 1,
  b: "1",
  // c: "testing", << 위에서 얘기하는 Type에 포함되지 않는다.
};

let obj2: any = {
  // any쓸거면 TS쓰기보다 JS쓰는게 낫다
  a: 1,
  b: "1",
  c: "testing",
};

function add(a: number, b: number): number {
  return a + b;
}

// Math.random();
let obj3: unknown = add(1, 2); //unknown 모름 뒤에 값이 뭐가 들어갔느냐에따라 다름/any랑은 다름
// unknown은 any 이외에 다른타입을 할당할 수 없다
// any는 모든 타입을 할당할 수 있다.
// let num1: number = obj3; << 안됨
// let num0: any = obj3; << 가능
// let num1: any = 3;
// let num2: number = num1;
console.log(obj3);

let test: { a: number; b: string };
let test1: { a: number; b: string };
// ...으로 반복해서 하려면 불편하다

type Test = {
  a: number;
  b: string;
};

let test2: Test;
// let test3: Test = { a: 1, b: "1", c: (): void => {} }; 이런식으로 추가적으로 불가능

type Test2 = {
  a: number;
  b: string;
  c: Function;
};
let test3: Test2 = { a: 1, b: "1", c: (): void => {} }; //하면 가능

type Test3 = Test2 & {
  d: string;
}; // 이렇게하면 위에서 쓴거에 추가로 가능하다
let test4: Test3 = { a: 1, b: "1", c: (): void => {}, d: "3" }; //하면 가능

interface ITestClass {
  getA(): number;
  getB(): string;
}
// 상속받아서 만든다
class TestClass implements ITestClass {
  private a: number;
  private b: string;

  constructor() {
    this.a = 123;
    this.b = "122";
  }
  getA = (): number => {
    return this.a;
  };
  getB = (): string => {
    return this.b;
  };
}

const testClass: ITestClass = new TestClass();
// testClass.a = 321
// private를 쓰면 아래에서 바꿀수 없다
console.log(testClass.getA());
console.log(testClass.getB());
// 결합도 응집도 -> 객체지향

// interface IStudent {}
// class Student implements IStudent {
//   name: string;
//   className: string;
//   // company: string; // 학생이 회사에 들어가 있는게 맞을까?
//   // 응집도는 여기에 있는게 맞나를 판단하는것
//   constructor(name: string, className: string) {
//     this.name = name;
//     // this.company = company;
//     this.className = className;
//   }
// }

// interface ITeacher {}
// class Teacher implements ITeacher {
//   name: string;
//   className: string;
//   constructor(name: string, className: string) {
//     this.name = name;
//     this.className = className;
//   }
// }

// const ljb: IStudent = new Student("이정배", "AWS");
// const jkh: ITeacher = new Teacher("정경훈", "AWS");

interface IPerson {
  getName(): string;
  getClassName(): string;
  // getJob?:Function
}

class Person implements IPerson {
  private name: string;
  private className: string; //원래는 따로 빼는것이 응집도에 맞다
  // 상속수가 많으면 수업 따라가기 힘듬

  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }
  getName(): string {
    return this.name;
  }
  getClassName(): string {
    return this.className;
  }
}

interface IStudent extends IPerson {}

class Student extends Person implements IStudent {
  constructor(name: string, className: string) {
    super(name, className);
  }
}

interface ITeacher extends IPerson {
  getJob(): string;
}

class Teacher extends Person implements ITeacher {
  job: string;
  constructor(name: string, className: string, job: string) {
    super(name, className);
    this.job = job;
  }
  getJob(): string {
    return this.job;
  }
}

const ljb: IStudent = new Student("이정배", "AWS");
const jkh: ITeacher = new Teacher("정경훈", "AWS", "교수");

// const arr: IStudent[] = [];
const arr: Array<IPerson> = [];

arr.push(ljb);
arr.push(jkh);

console.log(arr);
jkh.getJob();

(arr[1] as ITeacher).getJob();
