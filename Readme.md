# Type Script

JavaScript는 Dynamic typing 을 지원하는 언어.
5 - '3' 이렇게 숫자와 문자를 연산해도
parseInt([1,2,3]) 숫자로 바꿔주는 함수에 뭔가 이상한걸 넣어도 아무런 제지가 없다.

타입스크립트는 이런걸 전부 에러로 잡아준다.
더 정확한 에러메시지로 타입관련 버그발생시 고치기 유리하다.

## 설치

기본적으로 html, css, javascript개발이며 node가 깔려있는 상태에서 ->

> npm install typescript -g

## 이용

1. 작업폴더를 에디터로 오픈
2. .ts로 끝나는 파일 만들고 사용하면 됨.
3. js랑 똑같이 사용하면 되나, 웹브라우저는 ts파일을 알아듣지 못하기 때문에 js파일로 변환 작업을 해야함.
4. 에디터에서 terminal을 열고 tsc -w 입력해두면 자동으로 변환해줌.
5. 변환한 js파일을 이용하라함.

## 이미 있는 React 프로젝트에서 Typescript 사용할 경우

> npm install --save typescript @types/node @types/react @types/react-dom @types/jest

1. 설치후, js파일을 ts로 바꿔준다.
2. 뭔가 불안정해 에러가 많이난다함.

## 그냥 React 프로젝트를 새로 만들거면

> npx create-react-app my-app --template typescript

## Note

1. generic 살짝 이해 덜 됨.
2. react + ts redux toolkit deep dive 필요.
