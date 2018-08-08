import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from './formTitle';
import { FormInput } from './formFields';

class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <FormTitle className="login-form__title" text="Login" />
        <Field 
          className="login-form__email" 
          component={FormInput} name="email" 
          type="email" 
        />
      </form>
    )
  }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;