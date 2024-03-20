let a = 2;

function func1() {
  let a = 1; // record에 저장
  console.log(a);
}

func1(); // 실행 컨텍스트 생성(func1)

{
  let a = 3;
  console.log(a);
} // 눈으로 볼수없는 실행컨텍스트를 그나마 볼수있는것이 scope
// if나 for에는 안쌓임, 함수만 쌓이

{
  console.log(a);
}
