type Animal = string | number | undefined;

let 동물: Animal = "kim";

//타입도 변수에 담아 쓸 수 있다.
//이것을 전문용어로 type alias  별칭 별명 이라고 한다. 강사는 그냥 타입변수로 부른댄다.

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

// object 타입도 만들 수 있다.
