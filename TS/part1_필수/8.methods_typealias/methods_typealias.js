// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
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
"jsx\nfunction \uD568\uC2181(a){\n    a()\n  }\n  function \uD568\uC2182(){\n    \uC5B4\uCA4C\uAD6C~~\n  }\n  \n  \uD568\uC2181(\uD568\uC2182)\n";
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
