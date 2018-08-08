import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from './formTitle';

class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <FormTitle className="login-form__title" text="Login" />
      </form>
    )
  }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;