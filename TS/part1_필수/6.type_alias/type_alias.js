var 동물 = "kim";
var 동물2 = { name: "kim", age: 20 };
// object 타입도 만들 수 있다.
var 출생지 = "seoul";
출생지 = "부산";
// const로 선언한 변수는 수정할 수 없다.
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
var 여친 = {
    name: "유라",
};
여친.name = "공승연";
var position = { x: 10, y: 20 }; //extend한다고 한다. @@@
var friend = { name: "h", age: 20 };
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
테스트용변수.position = [2, 4]; //readonly라 수정불가.
//기존 타입을 &기호로 extend.
