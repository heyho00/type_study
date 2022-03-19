// 변수에 타입지정 = 변수에 실드 씌우는 것.
var namee = "kim";
var age = 30;
var 바보니 = true;
var 널 = null;
var 회원들 = ["kim", "park"];
// but,
var 박씨 = "park"; //타입지정 원래 자동으로 된다. 타입지정 문법 생략 가능.
//지정 안해주고 'park'을 123으로 바꾸면, 박씨에 커서올릴때 number라고 나온다.
//다음과 같이 생긴 자료의 타입지정을 해보자.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }
var project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
