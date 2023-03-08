import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './styles/App.css'
import './styles/Detail.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


//#################################################    23.03.06
//fetch()
//영화데이터를 가져올려면 axios 사용
//npm install axios  #### 설치

//axios.get('https://yts-proxy.now.sh/list_movies.json');
//axios 로 영화 API 호출
//axios는 네트워크를 사용함으로 느리다. 그래서 axios를 별도의 함수로 만들어서 
//자바스크립트에게 이 함수는 시간이 필요하고 (async) 즉 이 함수는 비동기 이다,
//axios.get()의 실행완료를 기다려 달라고 (await) 알려줘야 함.

//동기식은 A가 끝나면 B가 실행되고 B가 끝나면 C가 실행된다.
//비동기식은 동시에 실행됨.

//npm install prop-types #### 설치

//#################################################    23.03.03
//업데이트가 되었을 때 New props 또는 setState() 로 인해 render가 다시 실행된다. 그다음에 componentDidUpdate라는 함수를 실행 할 수 있다.
// state : 컴포넌트의 상태 state를 저장하고 변경할 수 있는 데이터, 클래스형 컴포넌트에서 사용.


//#################################################    23.03.02 
//다른 곳에서 사용하려면 (export) 내보내야 함

//index.html 에 내용을 넣으려면 여기(App.js)에 입력하면된다.
//index.html 하고(에 있는 root 와) App.js 를 연결해주는 게 index.js
//App컴포넌트에 Macaron 컴포넌트를 불러올 때  <Macaron /> 식으로 입력한다.

//return 안에 2개 이상 넣을 땐 부모요소를 만들어 준다.  ex) <>  <Macaron />  </>
//import가 안나올시 직접 만들어 준다.                   ex) import Macaron from "./Macaron";

//컴포넌트 이름은 대문자로 시작한다. 컴포넌트 아닌 파일은 이름을 소문자해도 가능하다.

// 데이터 관리
// props프로퍼티
// : 상위 컴포넌트에서 하위 컴포넌트로 단방향으로 전달되는 읽기 전용 데이터 (하위에서 상위로는 불가능) 
// props 는 객체 형태로 전달된다.
// propsName은 택배사 속성값은 택배라고 생각하면 된다.
// 이름은 임의로 설정해도 된다.