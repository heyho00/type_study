// 숙제1) 다음 자료의 타입을 지정해보십시오.

interface Objjj {
  [key: string]: string | number;
}

let objj: Objjj = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};
// 귀찮으니까 한번에 지정하기 위해 index signature 이걸 써봅시다.

// 유연한 타입지정이 가능하지만 엄격하지 않아서

// 버그를 잡아준다는 장점은 없어질 수 있습니다.

//type obj = {}
//interface obj {}
// 선언방식 다르다. 헷갈리지마셈.

// (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.

interface Obj {
  "font-size": Obj | number;
  [key: string]: Obj | number;
}

let objjs: Obj = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
// object 안에 object 안에 object가 들어있습니다.

// 타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요.

// 1. Obj을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있습니다.

// 2. 모든 문자 속성이 들어오면 number | Obj을 가져야한다고 타입지정해놨습니다.

// 그럼 이제 여러분들이 object 안에 object를 집어넣어도 Obj타입과 비슷하게 생기면 통과시켜줍니다.
