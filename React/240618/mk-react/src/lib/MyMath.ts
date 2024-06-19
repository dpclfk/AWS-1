interface IMyMath {
  add(a: number, b: number): number;
  add(a: string, b: string): number;
}
// 넘버가아니라 스트링도 받을수 있다
// 여러개를 적는걸 오버로드 (매개변수를 여러개 줌으로써 호출을 여러방식으로 가능)
// 대표적인 오버로드가 console.log()
// 부모가 적은걸 자식이 재정의를 하면 오버라이드

// 어디까지나 예시 실제로 이렇진 않음
// 1 = number, 2 = string, 4 = object, 8 = array
// 1, 10, 100, 1000
// 비트 연산자
class MyMath implements IMyMath {
  add(a?: number | string | null | undefined, b?: number | string): number {
    // 1 | 2(10) => 11 // 2진법
    // 넘어온 인자가 number => 1, 11에 포함
    // 넘어온 인자가 object => 4(100), 11에 포함안됨
    // 내보낼때는 number로만 내보낸다
    // ?가 붙으면 null | undefined 가 들어갈 수 있다
    // ?랑 타입에 null | undefined는 조금 다르다
    // a: number | string | null | undefined를 넣으면 네 값중에 하나를 무조건 넣어야한다고 인식함
    if (!a) a = 1;
    if (!b) b = 1;
    return +a + +b; // 형변환
  }
}

const myMath = new MyMath();
// myMath.add();

type TStudent = {
  name: string;
  age: number;
};
// const student = { name: "방지완", age: 29 };
// const key: string = "test";
// console.log(student[key]);

const student = { name: "방지완", age: 29 };
const key: keyof TStudent = "name";
// age, name가 아니면 오류가남
console.log(student[key]);
