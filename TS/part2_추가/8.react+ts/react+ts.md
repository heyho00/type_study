기존 프로젝트에 타입스크립트 같은거 도입하려면

그냥 대충 남들이 쓴다고 해서 따라쓰지말고 이득을 따져보셔야합니다.

- 프로젝트 사이즈가 큰가

- 협업시 다른 사람이 짠 코드를 참조할 일이 많은가

- 장기적으로 유지보수에 도움이 되는가

- 나중에 팀원이 더 필요해도 인력수급이 쉽게 가능한가

- 팀원들 학습에 필요한 시간과 비용이 적게 드는가

이런 질문을 해보시고 Yes 가 많으면 도입해도 됩니다.

실은 그냥 쓰십쇼 요즘은 거의 필수 스택이 되어서요 그리고 다른 언어도 아니고 에디터 부가기능 수준임

### 리액트프로젝트 설치는 이런 명령어를 사용합니다.

npx create-react-app 프로젝트명 --template typescript

기존 프로젝트에 타입스크립트만 더하고 싶으면

기존 프로젝트 경로에서 터미널을 오픈하신 후

npm install --save typescript @types/node @types/react @types/react-dom @types/jest
입력해주면 끝. 이제 .js 파일을 .ts 파일로 바꿔서 이용가능합니다.

이런거 할 바엔 깔끔하게 그냥 새로 프로젝트 만드는게 안전합니다.

### 일반 프로젝트와 다른 점은

컴포넌트 파일은 js가 아니라 tsx로 확장자를 사용하셔야한다는 점입니다. ts랑 똑같은데 jsx 문법을 지원합니다.

코드짜는 것은 일반 리액트와 큰 다른점이 없습니다. 있는게 이상함

다만 함수, 컴포넌트, state, props 타입체크를 잘 해줘야 에러가 나지 않습니다.

그래서 리액트에선 TS 문법을 어디에 써야하는지 4개로 정리해드리겠습니다.

### !!! 그냥 타입관련 버그가 생길 것 같은 곳에 타입지정하면 끝입니다. !!!

## 1. 일반 변수, 함수 타입지정

## 2. JSX 타입지정

리액트에선 변수나 자료에 <div></div> 이런걸 쌩으로 담아서 쓸 수 있습니다.

왜냐면 리액트에서 <div></div> 이렇게 쓰면 HTML이 아니라 JSX라고 부르는 자료가 됩니다.

이런 자료를 타입지정하고 싶으면 JSX.Element 라는 타입을 쓰시면 됩니다.

```jsx
let 박스: JSX.Element = <div></div>;
let 버튼: JSX.Element = <button></button>;
```

이러면 끝.

실은 더 정확히 타입지정하시려면

<div> <a> <h4> 같은 기본 태그들은 JSX.IntrinsicElements 라는 이름의 타입을 쓰면 됩니다.

```jsx
let 박스: JSX.IntrinsicElements["div"] = React.createElement("div");
let 버튼: JSX.IntrinsicElements["button"] = <button></button>;
```

위처럼 <button> 이런 간단한 태그를 타입지정하고 싶으면 저렇게 쓰십시오.

참고로 React.createElement('div') 이건 <div></div> 가 남습니다.

JSX 안쓰면 createElement 라는 이상한 함수로 리액트 코딩해야함.

## 3. function component 타입지정

```jsx
function App() {
  return <div>안녕하세요</div>;
}
```

리액트의 컴포넌트는 이렇게 생겼습니다.

컴포넌트 타입지정은 어떻게 하게요

당연히 함수니까 파라미터와 return 타입지정하면 됩니다.

파라미터는 항상 props기 때문에 props가 어떻게 생겼는지 조사해서 타입지정하시면 되고

근데 컴포넌트는 JSX를 return 한다는게 문제입니다. return 타입에 대체 뭘 기입해야하죠

```jsx
type AppProps = {
  name: string,
};

function App(props: AppProps): JSX.Element {
  return <div>{message}</div>;
}
```

props 파라미터는 어떻게 생겼는지 조사해서 알아서 타입지정해주면 되고

return 타입은 JSX.Element 써주시면 됩니다. 근데 생략해도 자동으로 타입지정됩니다.

예전 문법은

```jsx
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
```

이상하게 생겼는데 곧 사라질 문법입니다.

## 4. state 문법 사용시 타입지정

state 만들 땐 그냥 자동으로 타입이 할당되어서 걱정할 필요는 없습니다.

state 타입이 나중에 변화할 수 있다고요? 그런 경우는 흔치 않겠지만 그러면 미리 지정하십시오.

```jsx
const [user, setUser] = (useState < string) | (null > "kim");
```

그냥 <> 열고 타입넣으시면 됩니다.

Generic 문법을 이용해서 타입을 useState함수에 집어넣는 식으로 설정하면 됩니다.

## 5. type assertion 문법 사용할 때

```jsx
let code: any = 123;
let employeeCode = <number> code; //안됩니다

```

assertion 하고 싶으면 as 또는 <> 쓰면 되는데

리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 리액트에서 쓰지않습니다.

as 키워드만 씁시다.

하지만 as 키워드는 타입스크립트 보안해제기 때문에 타입이 100% 확실할 때만 사용하도록 합시다.

결론은 타입스크립트 쓴다고 뭔가 리액트 개발방식이 달라지는게 아니라

### 함수 변수 정의부분 타입지정을 할 수 있다는 것만 달라집니다.

"props엔 무조건 { name : string }만 들어올 수 있습니다"

이런 문법을 작성하는게 끝이고 그냥 에디터 부가기능 수준일 뿐임

여러분이 변수 함수 class 타입지정 하는 법을 잘 배우셨으면 누구나 응용가능합니다.
