import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

// 自定义路由
import Routes from './routers/routers'

import './App.css'
// 这里做全局加载，具体项目里可以考虑按需记载ant-mobile的js和css
import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {
  constructor(props) {
    super(props)

    // 模拟登陆态，这里默认false，具体项目里请求接口或根据本地存储来判断
    this.state = {
      isAuthenticated: false
    }
  }

  // 修改根组件state的方法，通过props传给子组件
  setRootState(obj) {
    this.setState(obj)
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      setRootState: this.setRootState.bind(this)
    }
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default withRouter(App)
