function 함수(x) {
  //return되는 값의 타입도 지정.
  return x * 2;
}
함수(30);
// 함수에서만 쓰이는 void라는 타입!
function 함수2(x) {
  // return되는값이 없게 해주세요
  // Java C#같은 객체지향 언어에서의 void와 유사
  1 + 1;
}
// 자바스크립트와 좀 다른점.
함수(2); //파라미터를 꼭 써줘야 한다는 점.
// 그게싫다면 파라미터에 옴셔널체이닝해준다.
//function 함수(x?:number):void {}
// 또, 이것은 function 함수(x:number|undefined) : void {}와 똑같다.
//문제
function 함수3(x) {
  console.log(x + 3);
}
// 왜 에러날까??
// 역시 타입스크립..
// string+number (가능)
// number+number (가능)
// x는 유니언타입이라 안된당.
//위의 경우 type narrowing으로 x가 숫자일 경우를 생각해주면 된다.
//다음 시간에...
