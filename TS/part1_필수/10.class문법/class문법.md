타입스크립트 더 알아보기 전에 class 키워드 모르는 분들이 있을까봐 준비했습니다.

자바스크립트에선 object를 가끔 복사해서 많이 생성할 일이 있는데

그 때 유용한 class 문법을 알아봅시다.

그 전에 function 키워드로 쉽게 만드는 법 부터 배워봅시다.

---

- 게임정보제공 사이트 만들어야징.
- 캐릭터들 정리해서 보여주자
- JS자료형으로 정보를 정리하자.

var 캐릭터1 = {여기에 캐릭마다 정보를 담는다.}

var nunu = {
q: 'consume',
w:'snowball'
}

var nunu = {
q: 'strike',
w:'courage'
}

.
.
.

이런 반복적으로 많이 object를 만들때 class를 만들어 써라.

object뽑는 기계다.
옛날 JS에는 클래스가 없었어서 함수로 만들수도 있어서 그걸로 설명한댄다.

```jsx
function 기계() {
    this.q = 'consume'; // this는 새로 생성되는 object. 그 object의 q에 consume 추가해주셈.
    this.w = 'snowball';
    }

기계 하나 만든거다. constructor라고도 한다.

class 기계{}

얘랑 똑같댄다.
```

```jsx
new 기계()

기계 뽑아짐.

var nunu = new 기계()  //얘랑

var nunu = { //얘랑 같은거다. object생성 한줄컷 ㅅㄱ
q: 'strike',
w:'courage'
}

//가렌도 생성해보자
var garen = new 기계();



```

그러나 여기서 문제점.
똑같은 q, w 스킬을 가지고있다.

```jsx
function 기계(구멍) {
  this.q = 구멍;
  this.w = "snowball";
}

var nunu = new 기계("consume");
var garen = new 기계("strike"); //JS에서는 상속관계라함.
```

이제 16 년 ES6이후 신문법.

```jsx
class Hero {
    constructor(구멍){
        this.q = 구멍;
        this.w = 'snowball';
    }
}

new Hero() 이렇게 쓴다!
```
