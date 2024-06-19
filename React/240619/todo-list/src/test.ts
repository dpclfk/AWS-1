// interface ITest {}
class Test<T, G> {
  list: T[] = [];
  temp1: T;
  constructor(temp1: T) {
    this.temp1 = temp1;
  }
  setTemp(temp1: T) {
    this.temp1 = temp1;
  }
}
// 배열의 타입을 알수없는데 타입을 any로 적어야 할까?
new Test<string, string>("asdasd");
// 변수 대신에 타입을 넘겨준다
export {};
