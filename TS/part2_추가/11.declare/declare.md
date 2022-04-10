코드를 짜다보면 외부 자바스크립트 파일을 이용하는 경우가 있다.

import 문법으로 가져다가 쓰면 되는데

근데 안타깝게도 그 파일이 Typescript로 작성된게 아니라 JavaScript 로 작성된 파일이면

무수한 에러가 여러분들을 기다리고 있습니다.

당연히 타입지정이 안되어있으니까요.

예를 들어서 data.js 라는 파일이 있다고 칩시다.

그리고 index.ts 파일에서 저기 있던 a라는 변수를 쓰고싶으면 어떻게 합니까.

```jsx
data.js;

var a = 10;
var b = { name: "kim" };

index.ts;

console.log(a + 1);
```

간단한 html css js 개발시엔 index.html에 저 파일 두개를 첨부하면 됩니다.

```jsx
(index.html)

<script src="data.js"></script>
<script src="index.js"></script>  //index.ts에서 변환된 js 파일

```

이게 원래 프론트엔드에서 import하는 방법입니다.

아무튼 콘솔창에 11 잘 나옵니다.

근데 타입스크립트 파일에선 a가 정의가 안되었다고 에러가 나는군요.

왜냐면 저거 <script> 태그로 자바스크립트 파일 2개를 연결해서 쓰는건 html 입장이고

ts 입장에서는 a라는 변수를 import 해온 적이 없기 때문에 에러가 나는 것입니다.

컴파일러가 징징대는걸 제압해봅시다.

# declare 키워드로 재정의하기

declare 쓰면 이미 정의된 변수나 함수를 재정의할 수 있습니다.

물론 타입도 포함해서 재정의가 가능합니다.

```jsx
(data.js)

var a = 10;
var b = {name :'kim'};
(index.ts)

declare let a :number;
console.log(a + 1);
declare 우측에 let a 같은 변수 정의 집어넣으면 됩니다.
```

"a 라는 변수를 이 파일에서 잠깐 정의해주세요" 라는 뜻입니다.

"a 라는 변수는 분명 어딘가에 있긴 하니까 그만 징징대세요" 라는 뜻이 더 맞습니다.

그래서 js파일 변수를 가져다 쓰는데 '타입에러나 변수없다는 에러'를 방지하고 싶으면

징징대는걸 막을 수 있는 공갈젖꼭지 declare 키워드를 씁시다.

(특징) declare 이게 붙은 코드들은 js로 변환되지 않습니다.

그냥 컴파일러에게 힌트를 주는 역할의 코드라서 그렇습니다.

그래서 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때도 나름 유용합니다.

타입스크립트 버전이 없다면 직접 declare로 타입작성하면 됩니다.

ts 파일들은 변수만들 때 타입까먹어도 자동으로 타입지정이 되어있으니 굳이 쓸 이유는 없습니다

근데 여러분이 tsconfig.json 안에 allowJs 옵션을 true로 켜두면

js파일도 타입지정이 알아서 implicit 하게 됩니다.

리액트 같은 프로젝트에서 유용

```jsx
Q. 그럼 .ts 파일에 있던 변수를 .ts 파일에서 쓰고 싶어도 declare 필요함?

A. ts 파일은 그냥 import export 문법을 쓰면 되는 것이지 뭐하러 고민하고 계십니까
```

## TS의 이상한 특징 : Ambient Module

타입스크립트가 제공하는 이상한 기능이 있습니다.

바로 import export 없이도 타입들을 다른 파일에서 가져다쓸 수 있다는 점인데

그니까 a.ts 에 있던 변수나 타입정의를 b.ts 에서도 아무런 설정없이 그냥 가져다쓸 수 있습니다.

```jsx
(data.ts)

type Age = number;
let 나이 :Age = 20;
(index.ts)

console.log(나이 + 1) //가능
let 철수 :Age = 30; //가능
지금 같은 폴더에 아무데나 data.ts 만들고 타입, 변수 이런거 넣어보십시오.
```

그럼 index.ts에서도 data.ts에 있던 변수와 타입을 자유롭게 사용가능합니다.

import export 그런거 안해도 **같은 폴더에 있는 ts 파일은 그냥 사용가능**합니다.

왜냐면 그냥 ts 파일에 대충 입력한 변수와 타입들은 전부 **global 변수 취급**을 받습니다.

전역으로 쓸 수 있는 파일을 전문용어로 **ambient module** 이라고 칭합니다.

(타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유를 여기서 찾을 수 있습니다. 어디선가 기본으로 let name 이미 쓰고있음)

반면에 import 혹은 export 키워드가 들어간 ts 파일은 다릅니다.

import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고

거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능합니다.

그래서 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가하면 됩니다.

```jsx
data.ts;
export {};
type Age = number;
let 나이: Age = 20;
index.ts;

console.log(나이 + 1); //불가능
let 철수: Age = 30; //불가능
```

이러면 data.ts에 있던 파일은 더 이상 글로벌 모듈 (ambient module)이 되지 않으며

다른 파일에서 함부로 가져다쓸 수 없습니다. import export 써야함

대체 왜 이딴식인가 생각을 해보면 옛날 js 파일과의 호환성 때문에 그런 것 같은데 약간 불편할 때가 많습니다.

declare global

> ts 파일에 import export 문법이 없으면 글로벌 모듈이 됩니다.
> ts 파일에 import export 문법이 있으면 로컬 모듈입니다.

근데 로컬 모듈에서 갑자기 전역으로 변수를 만들고 싶을 때가 있습니다.

실은 별로 없는데 아무튼 있다고 가정합시다.

따로 설정 없어도 프로젝트 내의 모든 파일에서 이용가능한 타입을 만들고 싶으면 이걸 붙여서 만드시면 됩니다.

```jsx
declare global {
type Dog = string;
}
```

이런 코드를 로컬 파일에 적어두시면 모든 파일에서 Dog 타입을 이용가능합니다.

이것도 일종의 namespace 문법인데 여기다 적은건 global 이라는 이름의 namespace에 추가된다고 보시면 됩니다.

그리고 global namespace는 모든 파일에서 기본적으로 이용이 가능하고요.

아무튼 로컬 모듈에서 전역변수 만들고 싶을 때 씁시다.
