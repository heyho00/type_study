var 이름 = "kim";
var 이름배열 = ["kim", "park"];
var 이름오브젝트 = { name: "kim" };
//다양한 타입이 들어올 수 있게 하려면 union type
var union = 123;
var 네임 = 123;
function 함수(x) {
    //변수에 타입지정도 가능, 어떤 타입이 리턴될지도 지정가능!(뒤에꺼)
    return x * 2;
}
var john = [123, true];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
