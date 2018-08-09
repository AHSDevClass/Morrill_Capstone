import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from './formTitle';
import { FormInput, FormButton } from './formFields';
import TextLink from './textLink';

class RegisterForm extends Component {
  render() {
    return (
      <form className="register-form">
        <FormTitle className="register-form__title" text="Register" />
        <Field 
          className="register-form__name" 
          component={FormInput} 
          name="fullname" 
          type="text" 
          title="Full Name" 
          placeholder="Enter full name" 
        />
        <Field 
          className="register-form__email" 
          component={FormInput} 
          name="email" 
          type="email" 
          title="Email" 
          placeholder="Enter email" 
        />
        <Field 
          className="register-form__pass" 
          component={FormInput} 
          name="password" 
          type="password" 
          title="Password" 
          placeholder="Enter password" 
        />
        <Field 
          className="register-form__confirm" 
          component={FormInput} 
          name="password" 
          type="password" 
          title="Confirm Password" 
          placeholder="Confirm password" 
        />
        <Field 
          className="register-form__register" 
          component={FormButton} 
          name="register" 
          type="submit" 
          title="Register" 
        />
        <div className='register-form__links'>
          <TextLink to='/login' text="Already registered? Login here" />
        </div>
      </form>
    )
  }
}

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

export default RegisterForm;