// Q. 위의 함수 파라미터에 타입지정해보도록 합시다 어떻게 하게요

// 힌트는 object처럼 생긴건 항상 object처럼 타입지정하면 됩니다. 알아서 해보십시오

let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function max(...x: number[]): number {
  let result = 0;
  x.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}
console.log(max(2, 4, 3, 7));

// 1. 함수를 만들었는데 파라미터 하나를 입력가능하게 만들었습니다. 근데 rest 파라미터라서 개많이 입력가능

// 2. 변수하나 만들었습니다. result = 0 이렇게요

// 3. 반복문을 써서 파라미터로 들어온 숫자를 계속 result와 비교합니다.

// 그래서 숫자가 더 크면 result 를 그 숫자로 갈아치우고

// 그게 아니면 냅둡니다.

// 반복문이 끝나면 result라는걸 return 해줍니다.

// return 값 타입지정은 알아서 해보도록 합시다.

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?

// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 함수({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

함수({ user: "kim", comment: [3, 5, 4], admin: false });

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

// 함수( [40, 'wine', false] )

type 어레이 = (number | string | boolean)[];

function 함수([a, b, c]: 어레이) {
  console.log(a, b, c);
}

함수([40, "wine", false]);

// array destructuring할 때는 자유작명이 가능합니다.
