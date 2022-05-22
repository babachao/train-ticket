/*
 * @Author: huchao
 * @Date: 2022-05-19 08:31:02
 * @LastEditors: huchao
 * @LastEditTime: 2022-05-20 23:10:54
 * @Description: file content
 */
import { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';


const About = lazy(() => import(/*webpackChunkName:"huchao"*/'./About.jsx'));

// ErrorBoundary 
// componentDidCatch

class App extends Component {
  state = {
    hasError: false
  }
  // 第一种捕获错误的方法 写法更优雅
  static getDerivedStateFromError(e) {
    console.log(e)
    return {
      hasError: true
    }
  }
  // 第二种捕获错误的方法
  // componentDidCatch(e) {
  //   this.setState({
  //     hasError: true
  //   })
  // }
  render() {
    if (this.state.hasError) {
      return <div>我在这发生了错误</div>
    }
    return <div>
      <Suspense fallback={<div>Loading...</div>}>
        <About></About>
      </Suspense>
    </div>
  }

}

export default App;
