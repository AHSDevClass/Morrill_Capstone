import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from './formTitle';
import { FormInput, FormButton } from './formFields';
import TextLink from './textLink';

class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <FormTitle className="login-form__title" text="Login" />
        <Field 
          className="login-form__email" 
          component={FormInput} 
          name="email" 
          type="email" 
          title="Email" 
          placeholder="Enter email" 
        />
        <Field 
          className="login-form__pass" 
          component={FormInput} 
          name="password" 
          type="password" 
          title="Password" 
          placeholder="Enter password" 
        />
        <Field 
          className="login-form__login" 
          component={FormButton} 
          name="login" 
          type="submit" 
          title="Login" 
        />
        <div className='login-form__links'>
          <TextLink to='/forgot' text='Forgot password?' />
          <TextLink to='/register' text="Don't have an account? Register here" />
        </div>
      </form>
    )
  }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;