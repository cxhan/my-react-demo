import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import Routes from './routers/routers'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated
    }
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default withRouter(App)