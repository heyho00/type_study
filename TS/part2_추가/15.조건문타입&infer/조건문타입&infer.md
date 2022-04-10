# 조건문으로 타입만들기 & infer

타입만들 때 초보처럼 type Age = string 이렇게 하드코딩하는 법만 배워봤습니다.

근데 if 조건문처럼 "조건에 따라서 이럴 경우 string, 저럴 경우 number"이런 식으로 타입지정도 가능합니다.

하지만 자주 쓰는 내용은 아니기 때문에 어짜피 다음날 까먹습니다.

이런게 있다고 기억해두고 나중에 필요하면 찾아서 쓰는게 좋은 방법입니다.

## 삼항연산자

자바스크립트 기본 문법 중에 삼항연산자라는게 있습니다.

if문 대용품인데 평소에 if가 들어갈 수 없는 곳들에 간략하게 if문을 넣을 수 있는 방법입니다.

조건문 ? 참일때실행할코드 : 거짓일때실행할코드
3 > 1 ? console.log('맞아요') : console.log('아님')
이렇게 if문처럼 사용합니다.

기본 문법 잠깐 짚어봤습니다.

## 조건부로 타입만들기

예를 들면 이런 코드가 있다고 칩시다.

```jsx
type Age<T> = T;
```

이러면 이제 Age<number> 이렇게 쓰면 그 자리에 number가 남습니다.

(타입변수에도 타입파라미터 넣기 가능)

근데 이걸 이렇게 바꿔봅시다.

"타입파라미터 자리에 string 타입을 집어넣으면 string 부여해주시고 그게 아니면 전부 unknown 부여해주셈"

if문을 쓰자는 겁니다. 만약 T가 string이면 string, 그게 아니면 unknown 를 남기도록요

타입 조건식은 주로 extends 키워드와 삼항연산자를 이용합니다.

"extends는 왼쪽이 오른쪽의 성질을 가지고 있냐" 라는 뜻으로 사용할 수 있기 때문에

나름 조건식 용도로 사용가능합니다. 비유하자면 수학에서 쓰는 ⊂ 이런 기호 역할이겠군요

```jsx
type Age<T> = T extends string ? string : unknown;
let age : Age<string> //age는 string 타입
let age2 : Age<number> //age는 unknown 타입
```

그래서 이렇게 썼습니다.

"T라는 파라미터가 string 성질 가지고 있냐? 그러면 string 남기고 아니면 unknown 남겨라"

그랬더니 정말 <string> 집어넣으면 string, <number> 이렇게 집어넣으면 unknown을 남겨줍니다.

이게 if문 쓰는 방법입니다.

아직 타입이 확실하지 않은 <타입파라미터> 다룰 때 많이 사용하겠죠?

## Q. 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,

array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?

```jsx
let age1: FirstItem<string[]>;
let age2: FirstItem<number>;
```

이러면 age1의 타입은 string, age2의 타입은 any가 되어야합니다.

FirstItem이라는 타입을 알아서 만들어봅시다.

```jsx

type FirstItem<Myy> = Myy extends any[] ? Myy[0] : any;

```

## infer 키워드

조건문에 사용할 수 있는 특별한 infer 키워드가 있습니다.

infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드입니다.

평상시에 굳이 쓸 이유는 없는데 나오면 읽을 줄은 알아야하니 간단히 알아보도록 합시다.

```jsx
type Person<T> = T extends infer R ? R : unknown;
type 새타입 = Person<string> // 새타입은 string 타입입니다
```

1. infer 키워드는 조건문 안에서만 사용가능합니다.

2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻입니다.

그래서 위의 예제에서 <string> 이렇게 타입파라미터자리에 string 집어넣으면 R은 string이 됩니다.

3. R을 조건식 안에서 맘대로 사용가능합니다.

이런 식으로 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드라고 보시면 됩니다.

근데 무슨 용도로 쓰는지 알아야 나중에 코드짤 때 활용이 가능하기 때문에 어디다 쓰냐면

1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다.

```jsx
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type NewType = 타입추출< boolean[] > // NewType 은 boolean 타입입니다
```

이런 식으로도 사용할 수 있는데

(infer R)[] 이렇게 하면 array가 가지고 있던 타입부분만 쏙 뽑아서 R 변수에 할당할 수 있습니다.

2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다.

```jsx
type 타입추출<T> = T extends ( ()=> infer R ) ? R : unknown;
type NewType = 타입추출< () => number > // NewType은 number 타입입니다
```

이런 식으로도 사용할 수 있는데

타입파라미터에 <함수>를 집어넣었습니다.

#### 그 타입파라미터에 있는 return 타입을 쏙 뽑아서 R이라는 변수에 담는 코드입니다.

일정한 규칙이 있다기 보다 **그냥 타입을 추출하는 식**으로 이해하면 되겠습니다.

실은 이런 것도 직접 만들어쓸 필요는 없고

ReturnType<> 이런 예약 타입이 있는데 여기에 함수타입 집어넣으면 return 타입만 뽑아서 알려줌
