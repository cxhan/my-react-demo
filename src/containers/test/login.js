import React, { Component } from 'react'

import {
  NavBar,
  Icon,
  List,
  InputItem,
  Toast,
  WhiteSpace,
  WingBlank
} from 'antd-mobile'
import Utils from '../../utils/util'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.goBack = this.goBack.bind(this)
    this.doLogin = this.doLogin.bind(this)
  }

  goBack() {
    Toast.loading('Loading...', 0.5, () => {
      this.props.history.goBack()
    })
  }

  doLogin() {
    let redirectUrl = Utils.getUrlQueryString('redirect')
    // 修改登录态
    this.props.setRootState({
      isAuthenticated: true
    })
    Toast.success('登录成功，即将跳转...', 2, () => {
      this.props.history.push(redirectUrl)
      this.props.history.goForward()
    })
  }

  render() {
    return (
      <div className="Login">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
          // rightContent={[
          //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          //     <Icon key="1" type="ellipsis" />,
          // ]}
        >
          Login-Page
        </NavBar>
        <WingBlank>
          <List renderHeader={() => 'mock login'}>
            <InputItem placeholder="username no need to input">
              <div
                style={{
                  backgroundImage:
                    'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                  backgroundSize: 'cover',
                  height: '22px',
                  width: '22px'
                }}
              />
            </InputItem>
          </List>
        </WingBlank>
        <WingBlank>
          <WhiteSpace />
          <a onClick={this.doLogin} className="am-button">
            去登录
          </a>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}
