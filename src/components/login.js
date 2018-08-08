import React, { Component } from 'react';
import Header from './header';

import LoginForm from './loginForm';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Header small={true} />
        <LoginForm />
      </div>
    )
  }
}

export default Login;