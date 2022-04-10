// 숙제1) 다음 타입을 변환기를 돌려보십시오.

type Bus = {
  color: string;
  model: boolean;
  price: number;
};
// 동료가 잘못 만든 타입입니다.

// color, model, price 속성은 전부 string 또는 number 타입이어야합니다.

// 1. 변환기 하나 만드시고

// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type Changer<MyType> = {
  [key in keyof MyType]: string | number;
};

type 새타입 = Changer<Bus>;

let 샘플: 새타입 = {
  color: "white",
  model: 3,
  price: "200",
};

// (숙제2) 이런 변환기는 어떻게 만들어야할까요?

// object안에 들어있는 모든 속성을

// string, number 이렇게 고정된 타입으로 변환해주는게 아니라

// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type Buss = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger<Buss, boolean>;
type NewBus2 = TypeChanger<Buss, string[]>;

//   이러면 TypeChanger 쓸 때마다 타입파라미터를 T 자리에 하나 더 입력할 수 있게 됩니다.

// 그러면 이제 오브젝트 모든 속성은 T로 바뀜

// NewBus 살펴보시면 모든 속성이 boolean으로 바뀌어있습니다.

// NewBus2 살펴보시면 모든 속성이 string[] 으로 바뀌어있습니다.
