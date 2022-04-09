# React + TypeScript 사용할 때 알아야할 점 2 : Redux toolkit

redux 왜 쓰냐면 1. state를 한 곳에서 관리할 수 있어서 컴포넌트들이 props없이 state 다루기 쉽고

2. 수정방법을 미리 reducer라는 함수로 정의해놔서 state 수정시 발생하는 버그를 줄일 수 있어서 씁니다.

그 외엔 쓸데없음 코드만 길어짐

- redux 공식 toolkit 라이브러리를 써서 이쁘게 코드짜는 신규방식 redux

- 예전처럼 if문 switch문 그런거 쓰는 전통방식 redux

둘 다 타입지정 어떻게 하는지 알아봅시다.

역시 이번 강의도 Redux 모르면 굳이 들을 필요는 없습니다.

## (전통방식 redux) state와 reducer 만들 때 타입지정 필요

redux를 사용하고 싶으면 npm install redux react-redux 이 명령어로 설치하면 됩니다.

redux는 걱정할 필요없이 type 정의가 미리 잘 되어있어서 그냥 설치하면 됩니다.

일단 예제로 <button> 버튼을 누르면 state가 +1, -1 되는 예제를 만들어보도록 하겠습니다.

그러려면 state가 하나 필요하겠죠? 그리고 +와 - 하는 방법을 정의해둔 reducer도 필요할 것 같군요.

파일 여러개로 나누면 이해가 어려우니 보기쉽게 index.ts에 필요한 모든 코드를 적어왔습니다.

```jsx
import { Provider } from "react-redux";
import { createStore } from "redux";

interface Counter {
  count: number;
}

const 초기값: Counter = { count: 0 };

function reducer(state = 초기값, action: any) {
  if (action.type === "증가") {
    return { count: state.count + 1 };
  } else if (action.type === "감소") {
    return { count: state.count - 1 };
  } else {
    return initialState;
  }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

적은 코드 설명을 하자면

1. 지금 initialState = { count: 0 } 이렇게 생긴 state 초기값을 만들었고

2. function reducer를 만들어서 state가 변경되는 방법을 미리 정의해뒀습니다. 변경방법은 1. 증가 2. 감소 두 개 입니다.

3. createStore 이런 나머지는 자잘한 기본 셋팅 문법입니다. 이해 필요없음

지금 딱 봐도 변수와 함수 보이죠? 타입지정 하고 싶으면 하십시오

그래서 redux 쓸 때는 똑같이 state 초기값과 reducer 함수의 타입지정 잘하면 됩니다.

(1) 초기값 변수 오른쪽에 타입지정 잘 해주십시오.

(2) reducer 함수는 state, action 이 이름의 파라미터 2개 타입지정 잘 해주십시오.

실은 state는 타입지정 필요없습니다 초기값 넣으면 타입지정 잘 됩니다

action은 님들이 나중에 dispatch 날릴 때 object 자료 집어넣죠? 그거랑 똑같이 생겨야합니다.

그래서 그거 그대로 타입지정해주면 되는데 대부분 { type : string, payload : number } 이런 식으로 생겼을 겁니다.

위에선 any라고 대충 써넣음 님들이 채워보셈

(3) 마지막으로 심심하면 reducer 함수의 return 타입도 타입지정 잘 해보십시오.

어떤걸 return 해줘야할지 적어두시면 됩니다. 딱봐도 초기값이랑 유사하게 생기면 될 듯

그리고 간혹 오해하시는 것들이 있는데

reducer 타입지정은 전부 reducer 안의 코드들을 잘못 짜서 생기는 버그를 약간 방지하는 용도입니다.

App.tsx 이런 곳에서 dispatch() 를 잘쓰냐 못쓰냐는 캐치해주지 않습니다.

## (전통방식 redux) state를 꺼낼 때

redux에 있던 state를 가져오려면

mapStateToProps도 있지만 useSelector 훅을 쓰시면 간단한걸 쉽게 가져올 수 있습니다.

그리고 state를 변경하려면 useDispatch 훅을 쓰면 dispatch를 간단히 날릴 수 있습니다.

```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./index";

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.count}
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        버튼
      </button>
      <Profile name="kim"></Profile>
    </div>
  );
}
```

1. useSelector를 쓰면 redux에 있던 state 빼오기 쉽습니다. 안에 콜백함수 넣으면 거기 있던 파라미터가 그대로 state임

2. useDispatch를 쓰면 redux로 수정요청을 날릴 수 있습니다. type을 잘 기입하시면 미리 정의해뒀던 수정방법이 동작함

위에선 버튼 누르면 증가하라고 해놨네요

타입지정은 그냥

(1) useSelector() 안에 파라미터 있는데 거기 하십쇼

state가 어떻게 생겼는지 파악한 다음 타입알아서 손수 지정해주시거나 아니면

귀찮으면 index.ts에서 타입을 export 해서 가져와도 됩니다.

index.ts 에 있던 export type RootState = ReturnType<typeof store.getState> 이 코드가

store의 타입을 미리 export 해두는 방법입니다.

(2) useDispatch도 타입지정하면 좋은데

import {Dispatch} from 'redux' 이렇게 타입을 가져오셔서

const dispatch :Dispatch 이렇게 쓰면 됩니다.

그럼 dispatch 날릴 때 안에 파라미터 안쓰면 에러내줌

## (신규방식 redux) state와 reducer 만들 때 타입지정 필요

신식 redux를 사용하고 싶으면 redux, react-redux에 이어서

npm install @reduxjs/toolkit
이런 라이브러리를 추가로 설치해주면 됩니다.

그럼 이제 조금 더 깔끔하게 코드짤 수 있습니다.

위와 같은 예제로 <button> 버튼을 누르면 state가 +1, -1 되는 예제를 만들어보도록 하겠습니다.

index.ts에 필요한 모든 코드를 적어왔습니다.

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const 초기값 = { count: 0, user : 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState : 초기값,
  reducers: {
    increment (state){
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    incrementByAmount (state, action :any){
      state.count += action.payload
    }
  }
})

let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>

//수정방법 만든거 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions


그리고 하단엔 <Provider store={store}> 이런 코드 추가해주면 끝입니다.
```

적은 코드 설명을 하자면

1. createSlice() 로 slice 라는걸 만들어줍니다. slice는 state와 reducer를 합쳐놓은 새로운 뭉텅이라고 보시면 됩니다.

2. slice 안에는 slice 이름, state초기값, reducer가 정확한 이름으로 들어가야합니다. 맘대로 작명 불가

3. state는 그냥 맘대로 만드시면 되고 reducer는 함수 형태로 만들어주면 됩니다. 첫 파라미터는 state, 둘째는 actions가 자동으로 부여됩니다.

4. 다 만든 것들은 configureStore 안에 등록하면 됩니다.

5. 내가 만들어둔 reducer를 쓰고 싶으면 reducer 안의 함수명을 export 해주시면 됩니다.

6. 나머지는 필요없는 셋팅문법임

타입지정은

(1) state 초기값 타입지정 알아서 해주십시오

(2) reducer 안의 action 파라미터의 타입지정 해주십시오

(3) 나머지는 타입지정 필요없습니다. 자동임

action 타입지정은 방법이 따로 있는데

```jsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

(상단 생략)
  incrementByAmount (state, action: PayloadAction<number>){
      state.value += action.payload
  },
```

이렇게 타입지정하라고 권장합니다.

나중에 dispatch할 때 보내는 데이터가 있으면 그걸 payload 라고 부르는데

그 자료의 타입을 <> 안에 집어넣어서 타입지정하라는 소리입니다.

문자를 payload로 보낼거면 string 집어넣으시고 그런 식입니다.

## (신규방식 redux) state를 꺼낼 때

```jsx
import { useDispatch, useSelector } from "react-redux";
import { RootState, increment } from "./index";

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        버튼
      </button>
    </div>
  );
}
```

1. useSelector 함수를 쓰면 state를 쉽게 꺼낼 수 있습니다.

쓰는 법은 안에 콜백함수 ()=>{} 하나를 집어넣으면 되는데 그 함수의 첫 파라미터는 항상 state가 됩니다.

2. useDispatch 함수를 쓰면 쉽게 수정요청을 날릴 수 있습니다.

타입지정은 state와 dispatch에 해주시면 됩니다.

(1) useSelector() 안의 파라미터에 타입지정해주십시오.

state가 어떻게 생겼는지 파악한 다음 타입알아서 지정해주시거나 아니면

타입을 index.ts 이런 리듀서 만든 곳에서 미리 RootState라는 타입을 export 해두시면 저렇게 저처럼 import 해서 쉽게 타입지정이 가능합니다.

(2) useDispatch() 사용할 때 타입지정 가능한데 그냥 예전 방식처럼 하든가

아니면 공식 문서에서는

index.ts에서 export type AppDispatch = typeof store.dispatch 해두고

App.tsx에서 import 해와서 useDispatch<AppDispatch>() 이렇게 타입지정하라고 되어있는데

저는 귀찮아서 이전 방식으로 씁니다.

역시 리덕스는 설계 부터 뭔가 잘못된 라이브러리입니다. 어떻게 해도 코드가 드러움

Vuex 보고 배워야합니다.
