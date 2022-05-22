/*
 * @Author: huchao
 * @Date: 2022-05-19 08:31:02
 * @LastEditors: huchao
 * @LastEditTime: 2022-05-21 11:51:02
 * @Description: file content
 */
import { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//  Hooks组件
function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }

  useEffect(() => {
    console.log('COUNT', count)
  }, [count])

  useEffect(() => {
    document.title = count
  }, [count]);
  // 加[]，只会执行一次，添加解绑
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, []);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>
        Click({count})

      </button>
      <span id='size'>size:{size.width} -- {size.height}</span>
    </div>
  )
}

//  Class组件
class App2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    }
  }
  // 窗口大小变化
  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    })
  }
  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener('resize', this.onResize, false)
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.onResize, false)
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    const { count, size } = this.state;
    return (
      <button onClick={() => { this.setState({ count: count + 1 }) }}>
        Click({count})
        size:{size.width} -- {size.height}
      </button>
    )
  }

}

export default App;
