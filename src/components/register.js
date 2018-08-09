import React, { Component } from 'react';
import RegisterForm from './registerForm';
import Header from './header';

class Register extends Component {
  render() {
    return (
      <div className="register">
        <Header small={true} />
        <RegisterForm/>
      </div>
    )
  }
}

export default Register;