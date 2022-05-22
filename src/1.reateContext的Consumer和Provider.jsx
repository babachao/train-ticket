/*
 * @Author: huchao
 * @Date: 2022-05-19 08:31:02
 * @LastEditors: huchao
 * @LastEditTime: 2022-05-20 22:39:28
 * @Description: file content
 */
import { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
// 使用createContext的Consumer和Provider
const BatteryContext = createContext(33);
const OnLineContext = createContext();

class Leaf extends Component {
  static contextType = BatteryContext
  render() {
    const battery = this.context;
    return (
      // 第一种写法： 含有Consumer 的写法获取到Provider
      // <BatteryContext.Consumer>
      //   {
      //     battery => (
      //       <OnLineContext.Consumer>
      //         {
      //           online => <h1>Battery:{battery}---- Online:{String(online)}</h1>
      //         }
      //       </OnLineContext.Consumer>
      //     )
      //   }
      // </BatteryContext.Consumer>

      // 第二种写法： 使用this.context 获取到provider
      <h1>Battery:{battery}</h1>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class App extends Component {
  state = {
    battery: 60,
    online: false
  }
  render() {
    const { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnLineContext.Provider value={online}>
          <button onClick={() => this.setState({ battery: battery - 1 })}>减1</button>
          <button onClick={() => this.setState({ online: !online })}>online取反</button>
          <Middle />
        </OnLineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default App;
