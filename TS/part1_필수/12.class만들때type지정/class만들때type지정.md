# class type

```jsx
class Person {
  constructor() {
    this.name = "kim";
  }
}

let 사람1 = new Person();
let 사람2 = new Person();
```

```jsx
class Person {
  data = 0; //필드라고한다. constructor와 똑같은 역할. 타입 지정 가능.
}
```

```jsx
class Person {
  name: string; //위에서 변수 타입 지정 해줘야 에러안남.
  constructor() {
    this.name = "kim";
  }
}

let 사람1 = new Person();
let 사람2 = new Person();
```

```jsx
class Person {
    name:string;
    constructor(a : string){ //파라미터 지정
        this.name=a
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

복제되는게 항상 Object기 때문에 return타입은 지정할 필요 없음.
```

```jsx
class Person {
  name;
  age;
  constructor (){
    this.name = 'kim';
    this.age = 20;
  }
}

필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서도 사용가능합니다.
```

```jsx
class Person {
  name;
  age;
  constructor ( a = 'kim' ){
    this.name = a;
    this.age = 20;
  }
}

혹은 함수 문법 중에 기본 파라미터 이런게 있습니다 (default parameter)

파라미터에 값을 입력 안하면 자동으로 할당해주는 그런걸 지정가능한데

파라미터 = 자료 이렇게 씁니다.

이런거 활용하면 그냥 타입지정 안해도 될 듯
```

Q. 필드값이랑 constructor랑 똑같은 역할이네요? 왜 구분해놓음?

들켰군요 똑같은 기능을 합니다.

근데 new Person() 사용할 때 파라미터로 뭔가 집어넣고 싶으면 constructor로 만들어야합니다. (파라미터를 이용하기 위해.)

## methods 타입지정

class 내부엔 함수를 입력할 수 있습니다.

그냥 함수명(){} 이거 넣으면 끝인데

이 함수는 Person이라는 클래스의 prototype에 추가됩니다.

```jsx
class Person {

  add(숫자){
    console.log(숫자 + 1)
  }
}

이러면 모든 Person의 자식들은 add 라는 함수를 이용가능합니다.

이 때 add라는 함수 타입지정은 어떻게 하게요

그냥 함수랑 똑같습니다. 파라미터 & return 타입지정 자유롭게 할 수 있습니다


```
