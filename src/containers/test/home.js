import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// 按需加载antd-mobile组件的js和css，配置.babelrc文件完毕就可以使用下面注释的方式来引用组建，但是和asyncComponent貌似有点冲突，构建的时候会报错
import { NavBar, Toast, WhiteSpace, WingBlank } from 'antd-mobile'

// 下面是比较麻烦的按需加载组件的方式
// import Button from 'antd-mobile/lib/button'
// import 'antd-mobile/lib/button/style/css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showToast() {
    Toast.loading('Loading...', 1, () => {})
  }

  render() {
    return (
      <div className="Home">
        <NavBar
          mode="dark"
          // icon={<Icon type="left" />}
          // onLeftClick={this.showToast}
          // rightContent={[
          //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          //     <Icon key="1" type="ellipsis" />,
          // ]}
        >
          HomePage
        </NavBar>
        <WingBlank>
          <WhiteSpace />
          <Link to="/test" className="am-button">
            test page
          </Link>
          <WhiteSpace />
          <WhiteSpace />
          <Link to="/test2" className="am-button">
            test2 page
          </Link>
          <WhiteSpace />
          <WhiteSpace />
          <Link to="/login" className="am-button">
            login page
          </Link>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
