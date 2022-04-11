Narrowing 하면서 코드짜는 것도 힘든데 특히나

1. undefined 타입일 경우 처리하는거

2. 복잡한 object자료들 narrowing 하는거

이게 가장 잦고 귀찮습니다. 이걸 쉽게 하는 법을 좀 알아봅시다.

## null & undefined 체크하는 법

실제로 개발할 때 어떤 변수나 함수파라미터에 null, undefined가 들어올 경우

어떻게 대처할지 if문으로 코드짜는 경우가 매우 많을 겁니다.

if (저 변수가 undefined일 경우) 어쩌구~
이런 코드 많이 짤 텐데 왜냐면 저런 상황을 미리 방어하는게 언제나 좋기 때문입니다.

근데&& 스킬을 쓰면 저런 if문을 생략할 수 있습니다.

그러기 위해서 && 연산자에 관련한 내용을 알아봅시다.

## && 연산자의 다른 기능

그래서 && 기호를 이용해서

if (변수 && typeof strs === "string") {}
이렇게 사용하면 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고,

(if문 조건식안에 falsy 값이 남으면 if문 실행되지 않습니다)

변수가 string 타입이면 if문이 실행됩니다.

변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법이라고 보면 되겠습니다.

```jsx
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(s);
  }
}
```

근데 한 눈에 안들어온다면 안쓰는게 좋습니다.

그냥 if (저 변수가 undefined일 경우) 어쩌구~ 이렇게 if문을 하나 더 쓰는게 어떨까요.

참고로 if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있습니다.

## in 연산자로 object 자료 narrowing

예를 들어서 파라미터로 object가 2개 들어올 수 있다고 타입지정을 해놓은 것입니다.

하나는 {a : 'kim}

다른 하나는 {b : 'park'}

이렇게 서로 다른 유니크한 속성들을 가지고 있다면

if (이 파라미터가 a라는 속성을 안에 가지고 있냐)

이런 if문을 써도 narrowing이 가능하다는 뜻입니다.

if (키값 in object자료형) 이렇게 쓰면 됩니다.

타입스크립트 컴파일러는 똑똑한 편이라 이런 것들도 narrowing 으로 판정해줍니다.

```jsx
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}
```

서로 배타적인 속성을 가져와야 narrowing이 가능합니다.

예를 들어서 Fish와 Bird 타입이 둘 다 swim 속성을 가지고 있고 Bird만 fly 속성을 추가로 가지고 있으면 어쩌죠?

어떻게 narrowing하면 좋을지 한 번 생각해봅시다.

class로부터 생산된 object라면 instanceof로 narrowing

class 문법을 아는 분들만 들어보도록 합시다.

어떤 클래스로부터 new 키워드로 생산된 object들이 있습니다.

그런 object 들은 instanceof 키워드를 붙여서 부모 클래스가 누군지 검사할 수 있는데

이것도 narrowing 역할을 할 수 있습니다.

가장 쉽게 new 키워드로 object 생산할 수 있는게 바로 날짜인데

자바스크립트에선 new Date() 이렇게 하면 date object 라는게 생성됩니다.

그래서 instanceof로 부모 클래스가 누군지 검사할 수 있습니다.

```jsx
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}
```

이렇게 쓸 수 있고 이런 문법도 narrowing 역할을 할 수 있습니다.

이 변수가 Date()로 부터 생성된 object 자료인지, 아니면 다른 애로부터 생성된 자료인지 이런걸 구분가능하기 때문입니다.

class 문법모르면 뭔소린지 모르겠죠? 그럴 경우엔 뒷부분 class, prototype 수업듣고 다시 놀러오도록 합시다.

## literal type이 있으면 narrowing 쉬움

```jsx
type Car = {
  wheel: "4개",
  color: string,
};
type Bike = {
  wheel: "2개",
  color: string,
};

function 함수(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}
```

지금 Car, Bike 타입을 각각 만들었는데 object 자료가 들어올 수 있습니다.

함수에 Car 타입을 입력할 경우 뭔가 실행하고 싶은데

근데 if문 안에서 narrowing 어떻게 하죠? Car 타입인지 어떻게 구분합니까 빨리 해보셈

typeof 연산자 써도 그냥 object 입니다~ 라고만 나올걸요 왜냐면 typeof 연산자는 string, number, object 이런 것만 구분해주기 때문입니다.

위에서 배웠던 in 문법 이런걸로 narrowing하기엔 힘들어보입니다. Car, Bike 둘 다 배타적인 속성이 없으니까요.

망한듯

**실은 object들 구분할 일이 많을 때 literal type을 만들어두면 편리한데**

그럼 서로 비슷한 object들이 들어와도 literal type으로 narrowing 가능하기 때문입니다.

제가 literal type 하나씩 적어둔거 보이시죠?

지금 Car 타입은 무조건 wheel 출력해보면 4

Bike 타입은 wheel 출력해보면 무조건 2가 나옵니다.

이거 가지고 object 끼리 narrowing 가능합니다.

그냥 if문으로 "지금 이 변수가 wheel 속성에 저장된게 4냐" 라고 물어보면 이건 누가봐도 Car 타입아니겠습니까.

타입스크립트는 스마트하니까 그렇게 쓰면 narrowing 충분히 가능합니다.

그래서 빨리 위에 코드 if문 조건식 채워보셈

---

그냥 literal type 으로 선언된 속성이 뭔지 찾아냈을 뿐입니다. 그러면 narrowing 가능

그래서 결론은 object 자료 비슷한걸 많이 다룰 땐

literal type으로 object 안에 각각 유니크한 자료를 달아두거나 그러면 나중에 구분하기 편리할 수 있습니다.
