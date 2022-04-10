# object 타입 변환기

가끔 object를 다른 타입으로 변환하고 싶을 때가 있습니다.

모든 속성들에 문자가 들어오는 타입을 갑자기 숫자가 들어오도록 바꾸고 싶을 때요.

그럴 땐 처음부터 타입을 다시 작성하는 것이 아니라 mapping을 이용하면 됩니다.

## keyof 연산자

그 전에 간단히 keyof 연산자를 짚고 넘어가야합니다.

keyof는 object 타입에 사용하면 object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내줍니다.

object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자입니다.

```jsx
interface Person {
  age: number;
  name: string;
}
type PersonKeys = keyof Person;   //"age" | "name" 타입됩니다
let a :PersonKeys = 'age'; //가능
let b :PersonKeys = 'ageeee'; //불가능
```

Person 타입은 age, name 이라는 key를 가지고 있었기 때문에

이제 PersonKeys는 정말 'age' | 'name' 타입이 됩니다.

### literal type이네요

```jsx
interface Person {
  [key :string]: number;
}
type PersonKeys = keyof Person;   //string | number 타입됩니다
let a :PersonKeys = 'age'; //가능
let b :PersonKeys = 'ageeee'; //가능
```

Person 타입은 모든 문자 key를 가질 수 있기 때문에

keyof Person 이렇게 하면 string 타입이 됩니다.

실은 string | number 타입이 됩니다. object key값에 숫자 넣어도 문자로 치환되어서 그렇습니다.

[key :number] 이렇게 숫자만 들어올 수 있다고 해놓으면 keyof Person 이렇게 하면 number 타입이 됩니다.

(참고) 쌩자바스크립트는 .keys() 이런거 붙이면 key값을 array자료로 담아줍니다.

## Mapped Types

가끔 object안에 있는 속성들을 다른 타입으로 한번에 싸그리 변환하고 싶을 때가 있습니다.

그럴 때 유용한 타입변환기를 만들어봅시다.

```jsx
type Car = {
  color: boolean,
  model: boolean,
  price: boolean | number,
};
```

팀원이 만든 Car 타입이 있다고 합시다.

여기 있는 모든 속성을 string 타입으로 바꾸고 싶어진 것입니다.

속성이 3개면 직접 다시 만들어도 되겠지만 100개면 어쩌죠? 매우 귀찮습니다.

```jsx
type Car = {
  color: boolean,
  model : boolean,
  price : boolean | number,
};

type TypeChanger <MyType> = {
  [key in keyof MyType]: string;
};
```

그럴 땐 TypeChanger 처럼 생긴 타입을 만들어봅시다.

그냥 쓰는 법이 정해져있는데

```jsx
[ 자유작명 in keyof 타입파라미터 ] : 원하는 타입
```

이렇게 입력하시면 object 타입을 입력했을 때 속성명은 그대로지만 다른 타입으로 변환해주는 변환기를 만들 수 있습니다.

in 키워드는 왼쪽이 오른쪽에 들어있냐라는 뜻이고

keyof는 오브젝트 타입에서 key값만 union type으로 뽑아주는 역할이라 머리쓰면 이해는 될듯요

```jsx
type Car = {
  color: boolean,
  model : boolean,
  price : boolean | number,
};

type TypeChanger <MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car>;

let obj :새로운타입 = {
  color: 'red',
  model : 'kia',
  price : '300',
}
```

이렇게 하면 이제 새로운타입은 color, model, price 속성을 가지고 있으며 전부 string 타입이 됩니다.

key 값이 100개 있는 object 타입을 변경할 일이 있으면 쓰도록 합시다.
