//union type
var 회원 = 123;
var 회원2 = 123;
//숫자 or 문자가 가능한 array 타입지정은?
var 회원들2 = [1, 2, "3"];
// let 회원들2 : number|string[] = [1,2,'3']
// 이 경우는 숫자거나 문자배열일 경우가 된다.
var 애니; //타입실드 해제라고 보면 된다. 아무거나 들어와도 된다.
애니 = 123;
애니 = "ㅎㅎ";
애니 = true;
애니 = undefined;
var 언논; //언논은 좀 더 안전하다.
언논 = 123;
언논 = "gg";
var 변수 = 애니;
var 변수2 = 언논; //이렇게 잡아준다.
언논 - 1; //이런것도 숫자 - 숫자 가 안되기때문에 에러발생.
//정확한 타입끼리만 연산되게 해줌. 엄격하다.
var 나이;
나이 + 1; //타입스크립트 엄격해서 안됨;ㅋ
// string타입 + 1 (허용)
// number타입 + 1 (허용)
// string|number타입 + 1 (안돼)  새로운 타입을 만든 것이기 때문에 안된다.
언논 - 1; //역시 안된다.
// unknown 타입인 변수를 조작하려면 나중에 Narrowing/Assertion배워서 엄격하게 코드짜면 된다고함..
// 결론은 아직 뭘 집어넣을지 모르겠는데 약간의 안정성을 도모하고 싶으면 unknown 타입을 써본다.
//숙제
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
// let user = 'kim';
// let agee = undefined;
// let married = false;
// let 철수 = [user, age, married];
var user = "kim";
var agee = undefined;
var married = false;
var 철수 = [user, age, married];
//학교라는 변수에 타입지정해보쇼.
// let 학교 = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
