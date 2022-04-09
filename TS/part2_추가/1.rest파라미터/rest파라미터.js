// Q. 위의 함수 파라미터에 타입지정해보도록 합시다 어떻게 하게요
// 힌트는 object처럼 생긴건 항상 object처럼 타입지정하면 됩니다. 알아서 해보십시오
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function max() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    x.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(max(2, 4, 3, 7));
function 함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수([40, "wine", false]);
// array destructuring할 때는 자유작명이 가능합니다.
