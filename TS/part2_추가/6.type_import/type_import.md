# 타입도 import export 해서 씁니다 그리고 namespace

a.ts -> b.ts 이렇게 변수나 함수를 가져다쓰고 싶은 경우

```jsx
a.ts;

export var 이름 = "kim";
export var 나이 = 30;
b.ts;

import { 이름, 나이 } from "./a";
console.log(이름);
```

## a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은 경우

```jsx
a.ts;

export type Name = string | boolean;
export type Age = (a: number) => number;
b.ts;

import { Name, Age } from "./a";
let 이름: Name = "kim";
let 함수: Age = (a) => {
  return a + 10;
};
```

타입도 똑같이 사용하면 됩니다.
