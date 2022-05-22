/*
 * @Author: huchao
 * @Date: 2022-05-19 08:31:02
 * @LastEditors: huchao
 * @LastEditTime: 2022-05-21 12:08:08
 * @Description: file content
 */
import { Component, useState, createContext, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const CountContext = createContext(); // 创建一个createContext

// createContext Hooks 中类组件的写法
class Foo extends Component {
  render() {
    return <CountContext.Consumer>
      {
        count => <h1>{count}</h1>
      }
    </CountContext.Consumer>
  }
}
class Bar extends Component {
  static contextType = CountContext;
  render() {
    const count = this.context
    return (<h1>{count}</h1>)
  }
}

//  Hooks中使用 useContext
function Counter() {
  const count = useContext(CountContext);
  return (
    <h1>{count}</h1>
  )
}

//  Hooks组件
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>
        Click({count})
      </button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default App;
