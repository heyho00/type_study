// 숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

// 무슨 타입일지는 알아서 기입합시다.

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

// (숙제2) array 안에 object 여러개가 필요합니다.

// 쇼핑몰 장바구니를 구현하려고 하는데

// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?

// 오늘 배운 interface 문법을 써봅시다.

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// (숙제3) 위에서 만든 타입을 extends 해봅시다.

// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.

// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface newCart extends Cart {
  card: boolean;
}
//혹은 속성이 겹치지 않으면 &연산자 써도 가능.

// (숙제4) object 안에 함수를 2개 넣고 싶은데요

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.

// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

// 이 object 자료를 어떻게 만들면 될까요?

// interface를 이용해서 object에 타입지정도 해보십시오.

interface Calculate {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

const Cal: Calculate = {
  plus(x, y) {
    return x + y;
  },

  minus(x, y) {
    return x - y;
  },
};
