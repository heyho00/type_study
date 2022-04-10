# d.ts

declare 키워드를 배웠으면 이제 d.ts 파일도 이해가 갑니다.

코드짜다보면 어디선가 d.ts 파일이 등장합니다.

#### 이 파일은 타입만 저장할 수 있는 파일형식입니다. (그래서 definition의 약자인 d가 들어감)

그리고 자바스크립트로 컴파일되지 않습니다.

어디다 쓰냐면

```
1. 타입정의만 따로 저장해놓고 import 해서 쓰려고

2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용

```

타입만 따로 d.ts에 모아놓으려면

1. 어쩌구.d.ts 라고 작성하신 파일은 타입 정의만 넣을 수 있습니다.

type 키워드, interface 이런걸로요.

함수의 경우 함수에 **{ } 중괄호 붙이기는 불가능**합니다. 파라미터 & return 타입만 지정가능합니다.

```jsx
export type Age = number;
export type multiply = (x: number, y: number) => number;
export interface Person {
  name: string;
}
```

그래서 대충 이렇게 생겼습니다.

2. 정의해둔 타입은 export 해서 써야합니다.

d.ts 파일은 ts 파일이 아니기 때문에 그냥 써도 ambient module이 되지 않습니다.

그래서 export를 추가해줘야 다른 ts 파일에서 가져다쓸 수 있습니다.

3. 한 번에 많은 타입을 export 하고 싶은 경우 namespace에 담든가

아니면 자바스크립트 배운 사람처럼 import \* as 어쩌구 문법을 쓰십시오.

d.ts 파일을 레퍼런스용으로 쓰려면

ts파일마다 d.ts 파일을 자동생성하시면 됩니다.

```jsx
(tsconfig.json)

{
    "compilerOptions": {
        "target": "es5",
        "module": "es6",
        "declaration": true,
    }
}
```

tsconfig에다가 declaration 옵션을 true로 바꿔주면 됩니다.

그럼 저장시 자동으로 ts파일마다 d.ts 파일이 옆에 생성됩니다.

열어보시면 타입정의만 쭉 정리되어서 담겨있음

```jsx
(index.ts)

let 이름 :string = 'kim';
let 나이 = 20;
interface Person { name : string }
let 사람 :Person = { name : 'park' }


이렇게 작성하면

(index.d.ts)

declare let 이름: string;
declare let 나이: number;
interface Person {
    name: string;
}
declare let 사람: Person;
```

이런 파일이 생성됩니다. (안생기면 import 문법 다 지워보셈)

어쩌구.d.ts 라는 파일엔 어쩌구.ts 파일에 있는 모든 변수와 함수 타입정의가 들어있습니다.

자동생성의 경우 따로 수정하거나 그럴 순 없어서 (수정해도 어쩌구.ts 저장시 자동생성이라 의미없음)

그냥 레퍼런스용으로 사용하거나 하시면 됩니다.

## export 없이 d.ts 파일을 글로벌 모듈 만들기

원래 d.ts 파일은 import export 없어도 로컬모듈입니다.

그래서 다른 ts파일에서 import를 해서 쓸 수 밖에 없는데

이게 귀찮으면 d.ts를 글로벌 모듈로 만들어보십시오.

파일이 많아지면 섞이기 때문에 굳이 왜 하나 싶지만

프로젝트 내에 types/common 이런 폴더 두개를 만드시고

tsconfig.json 파일에 "typeRoots": ["./types"] 이런 옵션을 추가해주면 됩니다.

이러면 ts 파일 작성할 때 타입없으면 자동으로 여기서 타입 찾아서 적용해줌

- 다만 이걸 쓸 경우 파일명.d.ts 자동생성 기능은 끄는게 좋을 듯 합니다.

- d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는게 좋습니다.

- 하지만 이런거 쓰다가 로컬 타입과 저런 글로벌 타입이 겹치면 어쩌쥬 역시 import export가 안전합니다.

## 유명한 JS 라이브러리들은 d.ts 파일을 제공

님들이 jQuery 혹은 Bootstrap 애니메이션 라이브러리를 가져다 쓴다고 합시다.

근데 이건 당연히 .js 로 끝나는 자바스크립트 파일이겠죠?

그럼 당연히 ts 파일에서 쓰려면 에러가 나겠죠?

그럼 여러분들이 직접 jquery.d.ts 파일을 만들어서 타입정의를 하시거나 그러면 되는데

근데 유명한 라이브러리들은 전부 d.ts 파일을 누군가 만들어 놨기 때문에

그거 찾아서 다운받거나 하시면 됩니다

**Definitely Typed** 여기가 주로 쓰는 라이브러리 모아놓은 github repository인데

아마 대부분 라이브러리의 타입정의 파일을 찾을 수 있을 겁니다.

근데 요즘은 npm으로 라이브러리 설치시 타입스크립트 타입정의된 버전을 따로 찾아서 설치하실 수 있습니다.

TypeSearch 여기 들어가면 타입정의된 npm 패키지 찾아볼 수 있음

타입이 정의된 라이브러리를 npm으로 설치하면

node_modules/@types 이런 경로에 타입이 설치됩니다.

그리고 타입스크립트 컴파일러는 자동으로 여기 있는 타입 파일을 참고해서 타입을 가져오게 되어있습니다.

(참고) "typeRoots" 옵션이 있을 경우 node_modules/@types 폴더를 추가해야합니다. 아니면 그냥 "typeRoots" 옵션을 제거해보셈

혹은 따로 타입부분만 설치할 수도 있습니다.

예를 들어 타입파일이 제공되지 않는 jQuery 같은 경우

npm install --save @types/jquery

이렇게 강제로 설치하시면 이제 jQuery 문법 사용할 때 타입정의 안하셔도 됩니다.
