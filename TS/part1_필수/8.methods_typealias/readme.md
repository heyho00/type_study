함수에 들어갈 파라미터와 return으로 뱉을 값들을 타입지정할 수 있다고 배워봤습니다.

# 함수 타입도 type alias로 저장해서 쓸 수 있습니다.

예를 들어서

1. 숫자 두개를 파라미터로 입력할 수 있고

2. 숫자를 return 하는 함수를 별명을 지어서 사용하려면

```jsx
type NumOut = (x: number, y: number) => number;
```

이걸 함수 만들 때 사용하려면

function 함수이름 :NumOut (){}

이런 식은 불가능합니다. function 키워드에는 () 이거 내부랑 오른쪽에만 타입지정이 가능해서요.

그래서 이렇게 합니다.

```jsx
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};
```

함수를 만들 때

let 함수명 = function(){} 이렇게 해도 되니까

함수명 오른쪽에 함수명 : 타입별명

이렇게 지정해서 사용하는 것입니다.

type alias 만들기 싫으면 그냥 함수만들 때 직접 타입작성하면 되겠죠 뭐

## methods 안에 타입지정하기

object 자료 안에 함수도 맘대로 집어넣을 수 있습니다.

몰랐다면 대충 어떻게 생겼는지 알아봅시다.

```jsx
let 회원정보 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();
```

plusOne 그리고 changeName 함수를 object 자료에 집어넣었습니다.

arrow function, 일반함수 전부 object 안에 맘대로 집어넣을 수 있습니다.

넣은 함수들은 똑같이 점찍어서 사용가능합니다.

왜 넣냐고요? 그냥 함수도 자료안에 보관해서 쓰고싶을 때가 있기 때문입니다.

근데 저거 타입지정 어떻게 하게요

그건 여러분도 알고있으니 숙제로 알아서 해보길 바랍니다.

숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.

- type 키워드를 쓰든 말든 알아서 합시다.

```jsx

```
