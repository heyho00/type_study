# rest 파라미터 destructuring 할 때 타입지정

함수에 어떤 파라미터가 몇개 들어올지 미리 정의가 불가능한 경우가 있습니다.

3개일지 4개일지 100개일지 모른다면 점3개 ...로 rest 파라미터를 만들어주면 됩니다.

```jsx
function 전부더하기(...a) {
  console.log(a);
}

전부더하기(1, 2, 3, 4, 5);
```

함수 파라미터 작명할 때 점3개 붙여주면 여기엔 파라미터 잔뜩 들어올 수 있습니다~라고 정의가 가능합니다.

전문 용어로 rest **파라미터**라고 합니다.

- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있습니다.

- rest 파라미터자리에 집어넣은 값들은 전부 [ ] 안에 담겨있습니다.

rest 파라미터 타입지정은

```jsx
function 전부더하기(...a: number[]) {
  console.log(a);
}

전부더하기(1, 2, 3, 4, 5);
```

rest 파라미터는 항상 [ ] 안에 담겨오기 때문에 타입지정도 array처럼 해주시면 됩니다. 끝

Spread operator와 다른겁니다

코드짜다보면 점 3개 붙이는 경우가 또 있는데

array 혹은 object 괄호 벗기고 싶을 때 왼쪽에 사용합니다.

```jsx
let arr = [3,4,5];
let arr2 = [1,2, ...arr]
console.log(arr2)
array 혹은 object 왼쪽에 점3개 붙이면 괄호 벗겨주세요~ 라는 뜻입니다.

그래서 arr2 출력해보면 [1,2,3,4,5] 나옵니다.
```

괄호벗겨주는 ...spread는 array, object 자료 왼쪽에,

여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에 출몰합니다.

## 잠깐 Destructuring 문법 개념설명

잠깐 다시 JS 문법설명 하나만 합시다.

자바스크립트에서 array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때 쓰는 문법이 있습니다.

```jsx
let 사람 = { student: true, age: 20 };
let student = 사람.student;
let age = 사람.age;
```

이렇게 쓰면 되긴 하는데 개발자들이 귀찮아서 새로운 문법을 만들어냈습니다.

Destructuring 이라는 것인데 변수로 빠르고 쉽게 뺄 수 있도록 도와주는 문법입니다.

```jsx

let { student, age } = { student : true, age : 20 }
이렇게 쓰면 똑같이 변수로 뺄 수 있습니다.
```

진짭니다 student 한 번 출력해보셈 true 들어있을 걸요

이걸 destructuring 문법이라고 하며 왼쪽 오른쪽 틀린그림찾기처럼 변수 작명해주시면 끝입니다.

```jsx
let [a, b] = ["안녕", 100];
```

array 자료도 왼쪽오른쪽 똑같아보이게 변수 작명해주시면 변수로 쉽게 뺄 수 있습니다.

다만 특징은 object destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리하고 (안맞추면 더 복잡함)

array destructuring할 땐 변수이름 맘대로 작명가능합니다.

## Destructuring 문법도 함수 파라미터에 사용가능

왜냐면 함수 파라미터 작명하는 것도 변수만드는 문법과 똑같아서 그렇습니다

변수만들 때 기존 object에 있던 자료를 파라미터로 집어넣고 싶으면

```jsx
let person = { student: true, age: 20 };

function 함수(a, b) {
  console.log(a, b);
}
함수(person.student, person.age);
```

기존 object에 있던걸 person.student 이렇게 각각 찝어서 집어넣으면 되긴 되는데

destructuring 문법을 이용하면 약간 더 쉽게 사용가능합니다.

```jsx
let person = { student: true, age: 20 };

function 함수({ student, age }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
```

실은 안쉬운듯

그니까 파라미터 변수만들 때 { student, age }라고 쓰면

파라미터로 들어오는 { student : 어쩌구 }는 student 라는 변수에 저장해주세요~

파라미터로 들어오는 { age : 어쩌구 }는 age 라는 변수에 저장해주세요~

라는 뜻입니다. (object 자료니까 변수 작명할 때 object 속성명으로 잘 작명해야함)

항상 같은 모습의 object, array 자료가 들어올 때 쓰는 문법이라고 보면 되겠습니다.
