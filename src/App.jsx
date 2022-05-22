/*
 * @Author: huchao
 * @Date: 2022-05-19 08:31:02
 * @LastEditors: huchao
 * @LastEditTime: 2022-05-22 14:11:17
 * @Description: file content
 */
import { Component, useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

// Hooks中使用 useContext
function Counter(props) {
  return (
    <h1>{props.count}</h1>
  )
}

//  Hooks组件
function App() {

  const [count, setCount] = useState(0);
  const double = useMemo(() => {
    return count * 2
  }, [count]);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>
        Click({count}) ,double:({double})
      </button>
      <Counter count={count} />
    </div>
  )
}

export default App;
