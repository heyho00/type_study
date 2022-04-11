# implements

interface는 object 타입지정할 때 쓴다고 배워봤습니다.

하지만 용도가 하나 더 있는데

#### class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있습니다.

근데 implements 키워드도 필요함

implements 키워드

class를 하나 만들어봅시다.

```jsx
class Car {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car("morning");
```

class Car 로부터 생산되는 object들은 model과 price 속성을 가지게 됩니다.

근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게합니까.

그럴 경우 interface + implements 키워드로 확인하면 됩니다.

```jsx
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car("morning");
```

class 이름 우측에 implements를 쓰고 interface 이름을 쓰면

"이 class가 이 interface에 있는 속성을 다 들고있냐"

라고 확인이 가능합니다.

그래서 다 갖고 있으면 별말 안해주고

혹여나 빠진 속성이 있으면 에러로 알려줍니다.

### implements는 타입지정문법이 아닙니다

### implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다.

class에다가 타입을 할당하고 변형시키는 키워드는 아닙니다.

```jsx
interface CarType {
model : string,
tax : (price :number) => number;
}

class Car implements CarType {
model; ///any 타입됨
tax (a){ ///a 파라미터는 any 타입됨
return a \* 0.1
}
}
```

지금 CarType을 implements 했냐고 써봤습니다.

근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임

class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않습니다.

결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심합시다.
