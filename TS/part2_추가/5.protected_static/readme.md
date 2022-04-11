(잠깐 JS 문법시간) class는 extends로 복사가능합니다

class는 복사할 수 있습니다.

extends라는 문법 쓰면 다른 class 만들 때 기존 class에 있던걸 전부 복사붙여넣기 가능합니다.

```jsx
class NewUser extends User {
  ~~ 어쩌구
}

```

이러면 새로운 NewUser class 만들 때 User에 있던거 저기다가 복붙해줍니다. 끝

님들이 기존 class와 비슷한 class를 많이 만들어야할 때 사용합니다.

## class 안에서 쓰는 protected 키워드

private 이거랑 비슷한 키워드가 하나 있는데

private인데 약간 보안을 해제하고 싶을 때 씁니다.

protected를 달아놓으면

> 1. private 이거랑 똑같은데 2. extends 된 class 안에서도 사용가능하게 약간 보안을 풀어줍니다.

예제를 쉽게 다시 만들어봅시다

```jsx
class User {
  protected x = 10;
}

```

User 라는 class의 x 속성은 protected 입니다.

그럼 private와 동일하게 class 안에서만 사용이 가능해지며

User의 자식들도 함부로 사용이 불가능합니다.

```jsx
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis(){
    this.x = 20;
  }
}
```

User를 extends 하는 NewUser class를 만들었습니다.

NewUser가 갑자기 this.x 이런 식으로 x를 가져다가 쓰려고 하면

x가 private 속성일 경우엔 에러가 나지만

x가 protected 속성일 경우엔 에러가 나지 않습니다.

그래서 class 여러개 만들 때 class 끼리 공유할 수 있는 속성을 만들고 싶으면 protected,

class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 private 이걸 쓰도록 합시다.

class 여러개 만들 일이 없으면 쓸모없습니다.

## class 안에서 쓰는 static 키워드

우리가 class { } 안에 집어넣는 변수, 함수 이런건 전부 class로 부터 새로 생성되는 **object (일명 instance)** 에 부여됩니다.

근데 class에 직접 변수나 함수를 부여하고 싶으면 static 키워드를 왼쪽에 붙여주면 됩니다.

예를 들어 봅시다.

```jsx
class User {
  x = 10;
  y = 20;
}

let john = new User();
john.x; //가능
User.x; //불가능
```

이런 x와 y같은 변수들은 User로 부터 생성된 object들만 사용가능합니다.

근데 static 키워드를 붙이면

```jsx
class User {
  static x = 10;
  y = 20;
}

let john = new User();
john.x; //불가능
User.x; //가능
```

john은 사용불가능하고

User는 직접 사용가능합니다.

> - 함수도 static 붙이기 가능
> - extends 로 class를 복사할 경우 static 붙은 것들도 따라옵니다.

## (참고) static은 private, protected, public 키워드와 동시 사용가능합니다.

```jsx
class User {
  private static x = 10;
}
```

### Q. static 이런걸 언제 씁니까

주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나

class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다.

쓸데는 없지만 간단한 활용 예시를 들어봅시다.

```jsx
class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}
var 철수 = new User();
console.log(철수);
```

1. User 클래스를 만들었습니다.

2. 근데 자식들에게 { intro : 'js 전문가입니다' } 이걸 복사해주고 싶은 것입니다.

3. 근데 여기서 js 라는 단어가 중요할 것 같아서 static skill 이 곳에다가 메모해놓고 그걸 사용했습니다.

4. 이제 자식들은 철수.intro 이렇게 사용할 때 마다 'js 전문가입니다~' 를 출력해줍니다.

근데 갑자기 skill을 좀 변경하고 싶은 겁니다.

철수 이후로 생산되는 자식들은 'js 전문가입니다~'가 아니라 'python 전문가입니다' 를 달고 나오게 하고 싶은 것임

그럴 때 class 내부를 직접 js -> python 이렇게 수정해도 되지만

class가 멀리 떨어져있거나 다른 파일에 있을 경우 귀찮습니다.

다행히 static 키워드로 만들어놨기 때문에 그걸 수정해버려도 됩니다.

```jsx
class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}

var 철수 = new User();
console.log(철수);

User.skill = "python";
var 민수 = new User();
console.log(민수);
```

User.skill을 저렇게 수정해버리면

이제 민수부터는 'python 전문가입니다~' 이걸 달고 등장합니다.

이런 식으로 쓸 수 있다고 보여드린 것일 뿐입니다.

실은 class 내부의 기본 변수같은걸 저렇게 수정할 일은 별로 없습니다.

수정하고 싶으면 private 쓰고 그 다음에 수정함수를 만들어서 사용하는게 더 안전한 방법입니다.

````jsx
숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.

class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y는 static이 붙었기 때문에 User.x 이런 식으로만 접근해 쓸 수 있다. 자식들은 못씀.
2. private static x는 class 내부에서만 수정가능.
3. public static y는 class 내/외부 상관없이 가능. public키워드 지워도 똑같이 작동.
4. protected z 는 private 키워드와 유사하게 class 내부에서만 사용가능한데 약간 범위가 넓어 extends로 복사한 class 내부에서도 사용가능.


----

(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?

그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

(조건) private static x = 10; 이 코드 수정금지

일단 static 속성들은 class에 직접 부여되는 속성이랬습니다.

그래서 static 속성을 수정하거나 가져다 쓰고 싶으면

그냥 클래스명.속성명 이렇게 하면 나옵니다.

class User {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터 :number){
    User.x += 파라미터
  }

  static printX(){
      console.log(User.x)
  }
}
User.addOne(3)
User.addOne(10)
User.printX()

----

(숙제3) 이런거 어떻게 만들게요



웹 요소 애니메이팅하는거 이런 것의 기초 격인데


let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()


이렇게 네모.draw()를 할 때마다

index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가

가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.


Square라는 class를 어떻게 만들면 될까요?

html css 기초학력이 흔들리는 분들은 좌절을 느낄 수 있는데 생각보다 별거 아닙니다.

그리고 심심하면 타입지정도 해봅시다.


answer)))))))))

일단 index.html 안에 타입스크립트가 변환된 js 파일 첨부가 잘 되어있는지 확인하시고

(index.html 내부)
<body>
  <script src="index.js"></script>
</body>


class Square {
  constructor (public width :number, public height :number, public color :string){
  }
  draw(){
    let a = Math.random();
    let square = `<div style="position:relative;
      top:${a * 400}px;
      left:${a * 400}px;
      width:${this.width}px;
      height : ${this.height}px;
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML( 'beforeend', square );
  }
}


let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
```

1. constructor를 이용해서 새로뽑는 object 들은 width, height, color를 입력할 수 있게 만들었습니다.

2. 자식들은 draw()를 쓰면

(1) 0과 1사이의 무작위 숫자를 뽑습니다. 그걸 변수 a에 저장해둡니다.

(2) <div>를 디자인합니다. 근데 <div>박스의 폭, 높이, 색상은 constructor로 입력한 것들을 활용합니다.

(3) <div> 박스의 위치는 left, right 속성을 이용해서 0~400px 사이로 무작위로 배치합니다.

(4) insertAdjacentHTML 이런거 이용하면 원하는 곳에 html 추가가 가능합니다.



그래서 실제로 자식을 하나 뽑아서 draw() 했더니 진짜 빨간 박스 4개 나옵니다.

다른 사이즈, 다른 색상으로도 뽑아서 draw() 이것도 가능하겠군요
````
