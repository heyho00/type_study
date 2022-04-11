# 타입을 파라미터로 입력하는 Generic

함수만들 때 () 여기에 파라미터 입력하지않습니까

근데 타입스크립트를 쓰시면 파라미터로 타입을 입력할 수도 있습니다.

<> 여기에 집어넣으면 됩니다.

함수 return 값의 타입이 애매하면

예를 들어

> 1. 아무렇게나 생긴 array 자료를 입력하면 2. array의 첫 자료를 그대로 출력해주는 함수를 만들었다고 합시다.

```jsx
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);
console.log(a);
```

이러면 콘솔창에 4가 출력됩니다.

근데 마우스 올려서 a의 타입을 확인해보면 숫자는 아니고 unknown 타입입니다.

왜냐면 지금 입력하는 array도 unknown 타입이라서 그렇습니다.

여기서 중요포인트는 타입스크립트는 타입을 알아서 변경해주지 않습니다.

스마트하게 숫자가 return 되면 "number 타입입니다~" 문자가 return 되면 "string 타입입니다~"

그런거 안해준다는 것입니다.

```jsx
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);
console.log(a + 1);
```

그래서 이런 연산도 에러가 납니다.

a는 사람이 보기에 분명히 숫자가 맞지만 아직 타입은 unknown 타입이니까요.

님들이 함수의 return 타입지정을 :number 이런 걸로 강제로 바꾸기 전까지는 number 타입으로 변하지 않습니다.

그래서 여러분이 함수에 불확실한 unknown, any, union 타입을 입력하면

나오는 값도 unknown, any, union 타입이고, 이 때문에 일어나는 문제들이 많습니다.

예를 들면 "함수가 10을 return 하는데 타입이 unknown 이라서 맘대로 조작을 못하네" 문제요

해결책은

### 1. narrowing 잘 하면 해결됩니다. 근데 귀찮음

### 2. 그냥 애초에 타입을 파라미터로 함수에 미리 입력하는 방법도 있습니다. 그럼 원하는 곳에 가변적으로 타입지정 가능

2번을 **Generic** 이라고 부릅니다.

## Generic 적용한 함수만들기

함수에 <> 이런 괄호를 열면 파라미터를 또 입력할 수 있습니다.

근데 여기 안엔 타입만 입력할 수 있습니다. 타입파라미터 문법임

```jsx
function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수 < number > [4, 2];
let b = 함수 < string > ["kim", "park"];
```

그럼 이제 함수를 사용할 때도 <> 안에 파라미터처럼 타입을 입력할 수 있습니다.

그럼 님들이 이제 함수<number>( ) 이렇게 쓰는 순간

MyType 이라는 변수에 number 라는게 들어간다고 보시면 됩니다.

그럼 이제 함수( x : number[] ) :number { } 이거랑 똑같이 동작합니다.

그럼 뭐가 좋겠습니까. 아까 unknown 가득한 예제와는 다르게

return 되는 타입이 number입니다.

b 변수는 return되는 타입이 뭐게요 맞춰보셈

아무튼 결론 : Generic을 쓰면 여러분이 정한 타입을 return 값으로 뱉는 함수를 제작가능한 것입니다.

<> 문법만 잘 쓰면 됩니다.

```jsx
function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수([4, 2]);
let b = 함수(["kim", "park"]);
```

실은 함수 사용시 꼭 <> 안써도 알아서 기본 타입을 유추해서 집어넣어줍니다.

이래도 결과는 똑같습니다.

(참고)

- 타입파라미터는 자유작명가능 보통 <T> 이런걸로 많이 합니다.

- 일반 함수파라미터 처럼 2개 이상 넣기도 가능합니다

근데 왜 - 1은 불가능함

함수 이런거 만들었는데 왜 에러가 나는 것이죠?

```jsx
function 함수<MyType>(x: MyType) {
  return x - 1;
}

let a = 함수 < number > 100;
```

<MyType> 자리에 number 이런거 타입 꽂아넣으면

MyType 붙은 곳에 다 집어넣어진다면서요

근데 x - 1 은 불가능하네요? 님 사기꾼인듯

이유는 에러메세지를 잘 보면 됩니다. 영어잘해야함

어디서 많이 보던 문장입니다.

<MyType> 이라는 곳에 number 말고도 다른거 혹시 집어넣을 수 있으니까 저런 - 1 연산을 미리 방지해주는 것입니다.

그래서 해결책은 narrowing을 하셔도 되는데 MyType에 집어넣을 수 있는 타입을 미리 제한하는 것도 하나의 해결책입니다.

## Generic 타입 제한하기 (constraints)

extends 문법을 쓰면 넣을 수 있는 타입을 제한할 수 있습니다.

그래서 MyType extends number 라고 쓰면 타입 파라미터에 넣을 수 있는 타입을 제한가능합니다.

interface 문법에 쓰는 extends와는 살짝 다른 느낌입니다.

그 extends는 복사인데 이번 extends는 number와 비슷한 속성을 가지고 있는지 if 문으로 체크하는 문법이라고 보면 됩니다.

```jsx
function 함수<MyType extends number>(x: MyType) {
return x - 1
}

let a = 함수<number>(100) //잘됩니다
```

그래서 그렇게 써봤습니다. 이러면 에러없이 잘됩니다.

return 타입지정을 안한 이유는 숫자 - 숫자를 했으니 알아서 number 타입이 됩니다.

언제나 커스텀 타입도 extends 가능

예를 들어서 문자로 파라미터를 넣으면 자릿수를 세어서 출력해주는 함수를 Generic으로 만들고 싶습니다.

```jsx
function 함수<MyType>(x: MyType) {
  return x.length;
}

let a = 함수 < string > "hello";
```

문자에 .length 붙이면 몇자리의 문자인지 출력해주는데

에러나고 안됩니다.

왜냐면 MyType에 님들이 string을 집어넣었지만 나중에 number 이런거 실수로 집어넣으면 어쩔 것임

그럴 수 있어서 아직 .length같은 조작을 일단 방지해주는 것입니다.

그래서 MyType을 extends 이런걸로 정확히 제한해주면 되는데

이번엔 interface로 만들어둔 타입을 extends 해봅시다. 제맘임

```jsx
interface lengthCheck {
length : number
}
function 함수<MyType extends lengthCheck>(x: MyType) {
return x.length
}

let a = 함수<string>('hello') //가능
let a = 함수<number>(1234) //에러남
```

1. length 속성을 가지고 있는 타입을 하나 만들었습니다. 이름은 lengthCheck로 했습니다.

2. 그걸 extends 해주면 MyType도 length 속성을 복사해서 가집니다.

3. 그래서 MyType은 length가 분명히 있기 때문에 맘대로 MyType을 부여받은 x는 .length 조작이 가능합니다.

(참고) class도 class <MyType> {} 이런 식으로 만들면 new로 뽑을 때 타입파라미터를 집어넣을 수 있습니다.

type Age<MyType> = MyType 이런 식으로 타입변수에도 사용가능
