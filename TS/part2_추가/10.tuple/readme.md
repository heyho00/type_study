array 자료에 타입을 지정하고 싶으면 string[] 이렇게 기입하라고 했습니다.

하지만 보다 구체적으로 타입지정하고싶을 때가 있습니다.

"첫 자료는 무조건 string, 둘째 자료는 무조건 number인 array"

이런 것도 가능합니다. tuple 타입 쓰면 됩니다.

# Tuple 타입

tuple type은 **array에 붙일 수 있는 타입**인데

**자료의 위치까지 정확히 지정**할 수 있는 타입입니다.

```jsx
let 멍멍이: [string, boolean];
멍멍이 = ["dog", true];
```

[ ] 괄호 안에 타입 적으시면 tuple type이 됩니다.

[ ] 안에 차례로 세부 타입을 기입하면 됩니다.

그럼 정말 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean만 허용해주고 다른게 들어오면 에러로 잡아줍니다.

## Tuple 응용 : rest parameter

```jsx
function 함수(...x: string[]) {
  console.log(x);
}
```

함수 정의할 때 파라미터 왼쪽에 점3개 붙이면 rest parameter라고 했습니다.

"여기에 파라미터가 몇 개 들어올지 아직 몰라요~" 라는 뜻으로 사용하는 파라미터입니다.

x 자리에 입력한 파라미터들은 array에 담겨오기 때문에 array 처럼 타입지정을 해주는게 일반적입니다.

근데 tuple을 이용해서 타입지정을 해주는 것도 가능

```jsx
function 함수(...x: [string, number]) {
  console.log(x);
}
함수("kim", 123); //가능
함수("kim", 123, 456); //에러
함수("kim", "park"); //에러
```

rest parameter를 엄격하게 사용가능합니다.

일반 파라미터 2개 넣는 것과 기능상 다를 바는 없는데

**차이는 rest parameter 쓰시면 파라미터가 전부 array에 담겨서 오는게 차이**입니다.

## tuple 안에도 옵션가능

```jsx
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];
```

물음표 넣어서 옵션이라고 표현가능합니다.

하지만 이런 코드는 어떻습니까.

```jsx
type Num = [number, number?, number];
```

이거 말이 됩니까

array 중간에 있는 자료는 옵션이라고요?

중간을 빼고 만들 수도 없고 뭔가 논리적으로 이상합니다.

#### 그래서 ? 옵션기호는 뒤에만 붙일 수 있습니다.

물음표 2개 쓰고 싶으시면 뒤에서 2개만 붙일 수 있음

물음표 100개 쓰고 싶으시면 뒤에서 100개만 붙일 수 있음

## array 두개를 spread 연산자로 합치는 경우 타입지정은?

```jsx
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
```

점 3개 spread 연산자를 사용하면 array의 괄호를 벗겨준다고 했습니다.

그래서 위 예제처럼 쓰면 array 두개를 합치고 그럴 수 있습니다.

근데 그럼 arr2 타입지정은 대체 어떻게 해야할까요 tuple 타입으로요.

arr 자리에 자료 몇개가 들어올지도 모르는 상황이라면요

```jsx
let arr = [1,2,3]
let arr2 :[number, number, ...number[]] = [4,5, ...arr]
```

tuple 타입에 점3개 붙이면 됩니다.

점3개 붙이면 아직 여기에 몇개의 자료가 들어올지 모른다는

rest parameter 같은 느낌으로다가 활용가능합니다.

```jsx
let arr2 :[number, number, ...number[]] = [4,5,6,7,8,9,10]
```

rest parameter 처럼 맘껏 집어넣을 수 있습니다.
