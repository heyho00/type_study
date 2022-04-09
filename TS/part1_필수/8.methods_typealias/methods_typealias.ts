// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.

// - type 키워드를 쓰든 말든 알아서 합시다.

type 회정 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: 회정 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(1);
회원정보.changeName();

// 숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

//함수 type alias를 지정하기 위해선 함수를 변수에 할당해 사용가능!!!!!!

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

// 숙제3) 함수에 함수를 집어넣고 싶습니다.

// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.

// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

// 만들함수('010-1111-2222', cutZero, removeDash)

// 이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다.

// 이런거 처음이면 어려울 수 있으니 하루 드림

`jsx
function 함수1(a){
    a()
  }
  function 함수2(){
    어쩌구~~
  }
  
  함수1(함수2)
`;

// 이렇게 디자인해놓으면 함수를 파라미터로 입력했을 때 내부에서 실행할 수 있습니다.

// 함수1(함수2) 이렇게 코드를 적으면

// 함수1() 내부 코드가 실행되고 그러면 함수2() 이게 실행이 되겠군요.

// 이게 함수에 함수넣어서 실행시키는 법입니다.

// 함수에 들어가는 함수를 멋진 개발자 용어로 콜백함수라고 부릅니다.

// 여기선 함수2가 콜백함수네요

// 함수에 들어가는 함수를 멋진 개발자 용어로 콜백함수라고 부릅니다.

// 여기선 함수2가 콜백함수네요

// function 만들함수 (a:string, func1, func2){
//     let result = func1(a)
//     let result2 = func2(result);
//     console.log(result2)
// }

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

만들함수("010-1111-2222", cutZero, removeDash);
