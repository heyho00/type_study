타입스크립트 쓰면 자바스크립트에 없는 문법도 사용가능합니다.

객체지향 언어에서 제공하는 public, private, static, protected 이런 키워드를 사용가능한데

뭔지 한번 알아봅시다.

# public, private 키워드로 사용제한두기

타입스크립트는 class 안에서 public 키워드를 사용가능합니다.

원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능합니다.

```jsx
class User {
  public name: string;

  constructor(){
    this.name = 'kim';
  }
}

let 유저1 = new User();
유저1.name = 'park';  //가능

```

public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정가능합니다.

실은 public 붙이든 안붙이든 똑같긴 합니다. 맞잖아요 실험해보셈

왜냐면 필드값 같은걸 그냥 만들면 public이 몰래 왼쪽에 부여되기 때문입니다.

> (참고) public 키워드는 class 내의 prototype 함수에도 붙일 수 있습니다.

## 근데 private 키워드를 붙이면 수정이 불가능해집니다.

무조건 class { } 중괄호 안에서만 수정 및 사용가능합니다.

심지어 class로 부터 생산된 자식 object에서도 private 붙은건 사용불가능합니다.

(class 중괄호 내부가 아니니까요)

```jsx
class User {
  public name :string;
  private familyName :string;

  constructor(){
    this.name = 'kim';
    let hello = this.familyName + '안뇽'; //가능
  }
}

let 유저1 = new User();
유저1.name = 'park';  //가능
유저1.familyName = 456; //에러남
```

familyName 라는 속성에는 private 키워드를 추가했더니 아무데서나 수정이 불가능해졌습니다.

private 붙은 속성들은 오직 class { } 안에서만 수정이 가능합니다.

이렇게 속성을 외부에서 숨기고 싶을 때 private 키워드를 이용합니다.

실은 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩니다.

> (참고) private 키워드는 class 내의 함수에도 붙일 수 있습니다.

Q. private 부여된 속성을 class 밖에서 수정해야할 경우?

1. private 속성을 수정하는 함수를 class 안에 만들어서 2. 함수를 실행시키면 됩니다. 오!@

```jsx
class User {
  public name :string;
  private familyName :string;

  constructor(){
    this.name = 'kim';
    let hello = this.familyName + '안뇽';
  }
  changeSecret(){
    this.familyName = 'park';
  }
}

let 유저1 = new User();
유저1.familyName = 'park';  //에러남
유저1.changeSecret()        //가능
```

근데 "문법을 이렇게 쓴다~~ 필기해라" 가 중요한게 아니라

배웠으면 어디다 쓰는지 알아야합니다.

어디다 쓰는지 알아야 나중에 개발할 때 써먹죠

### Q. private 이걸 어따씀?

### A. 개발하다보면 소중하게 지켜주고 싶은 중요한 변수나 속성들이 있습니다.

예를 들면 위의 예제에선 familyName 이런건데 이걸 외부에서 실수로 수정하거나 그러면 큰일날 것 같은 그런 속성들이요.

이걸 외부에서 실수로 수정하지 않도록 지켜주고 싶으면 private를 붙여보시길 바랍니다.

그리고 이걸 쓰면 함수를 만들어서 수정해야하니 약간의 안전장치를 더해서 개발이 가능합니다.

개발이 귀찮아지지만 버그를 예방해주는 키워드이며

react-redux 이런거 하다보면 매번 보게될 패턴입니다.

## public, private 키워드 쓰면 이런 것도 가능

constructor 안에서 this.name = name 이런걸 생략할 수 있습니다.

```jsx
class Person {
  name;
  constructor ( name :string ){
    this.name = name;
  }
}
let 사람1 = new Person('john')


class Person {
  constructor ( public name :string ){

  }
}
let 사람1 = new Person('john')
```

위 두개의 코드는 같은 역할을 하는 코드입니다.

"constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능하다" 라는걸 참고해주시면 되며

이제 Person으로부터 새로 생산되는 object들은 name 속성을 가질 수 있습니다.
