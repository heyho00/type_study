// let age1: FirstItem<string[]>;
// let age2: FirstItem<number>;
// (숙제1) 타입 파라미터로
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
// (동작예시)
var age1;
var age2;
// 이러면 a라는 타입이 number로 잘 남습니다.
// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면
// 언제나 T 라는 함수 파라미터 만들 때 extends로 제한을 두면 됩니다.
