```jsx
function 함수(x: number): number {
  //return되는 값의 타입도 지정.
  return x * 2;
}

함수(30);

// 함수에서만 쓰이는 void라는 타입!
function 함수2(x: number): void {
  // return되는값이 없게 해주세요
  // Java C#같은 객체지향 언어에서의 void와 유사
  1 + 1;
}

// 자바스크립트와 좀 다른점.
함수(2); //파라미터를 꼭 써줘야 한다는 점.
```

그게싫다면 파라미터에 옴셔널체이닝해준다.
function 함수(x?:number):void {}
또, 이것은 function 함수(x:number|undefined) : void {}와 똑같다.

문제

```jsx
function 함수3(x: number | string): void {
  console.log(x + 3);
}
```

왜 에러날까??
역시 타입스크립..
변경하려는 변수의 타입이 확실해야 연산을 수행해준다.

'kim'+1
string+number (가능)
1+1
number+number (가능)
파라미터 x는 string도 number도 아닌 유니언타입이라 안된당.

위의 경우 type narrowing으로 x가 숫자일 경우를 생각해주면 된다.
다음 시간에...

### 1문제

이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
파라미터와 return 타입지정도 잘 해봅시다.

```jsx
function 이름함수(name?): void {
  if (name) {
    console.log("hi" + name);
  } else {
    console.log("이름이 없습니다.");
  }
}
```

### 2문제

함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

```jsx
function 숫문(x: number | string): number {
  return x.toString().length;
}
```

숫자는 length 쓸 수 없어서 string으로 변환해준다.

### 3문제

결혼 가능 확률을 알려주는 함수를 만들어봅시다.

1.  함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
2.  월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
3.  총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

```jsx
function 결가(월소득: number, 집: boolean, 매력: string): string | void {
  let home = 집 === true ? 500 : 0;
  let charm = 매력 === "상" && 100;

  return 월소득 / 10000 + home + charm >= 600 && "결혼가능";
}
```
