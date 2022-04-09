type Animal = string | number | undefined;

let 동물: Animal = "kim";

//타입도 변수에 담아 쓸 수 있다.
// 대문자 시작이 국룰. 일반변수와 구분하기 위해.
//이것을 전문용어로 type alias  별칭 별명 이라고 한다. 강사는 그냥 타입변수로 부른댄다.

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

// object 타입도 만들 수 있다.

const 출생지 = "seoul";
출생지 = "부산";
// const로 선언한 변수는 수정할 수 없다.

const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

//object 자료수정은 가능하다. 재할당이 안되는거지.
//그러나 바꿀 수 있는 법이 있다.
// const 여친 = {
//     name:'유라'
// }
// 여친.name='공승연'

type Girlfriend = {
  readonly name?: string; //읽기전용. 그러면 자료 수정할수없다. 옵셔널 줄 수도 있다.
};

const 여친: Girlfriend = {
  name: "유라",
};
여친.name = "공승연";
//에러 띄우지만 실제로는 JS에서는 실행이 된다. 바꿔준다.

type Namee = string;
type Age = number;
type Person = Name | Age; //이렇게 합쳐 줄수도 있다.

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; //합쳐진다. {x:number, y:number}
let position: NewType = { x: 10, y: 20 }; //extend한다고 한다. @@@

// type 변수 재정의 불가능.
// type PositionX= number; //위에 있기 때문.

type Boyfriend = {
  name: string;
  age: number;
};

//숙제 1)
type NewFriendType = Girlfriend & Boyfriend;
let friend: NewFriendType = { name: "h", age: 20 };

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.

// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

// type alias로 만들어보셈

type GoodType = {
  color?: string;
  size: number;
  readonly position: number[];
};
let 테스트용변수: GoodType = {
  size: 123,
  position: [1, 2, 3],
};

테스트용변수.position = [2, 4]; //readonly라 수정불가.

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Data = {
  name: string;
  phone: number;
  email: string;
};

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.

// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type Teen = { teen: boolean };

type newData = Data & Teen;

//기존 타입을 &기호로 extend.
