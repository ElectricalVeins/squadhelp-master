import React                from 'react';
import styles               from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput            from '../FormInput/FormInput';
import customValidator      from '../../validators/validator';
import Schemes              from '../../validators/validationSchems';
import FormError            from "../FieldError";

const LoginForm = props => {
  const { isFetching, handleSubmit, submitting } = props;

  const formInputStyles = {
    inputStyles: styles.input,
    invalidStyles: styles.notValid,
    validStyles: styles.valid,
  };

  const renderField = ( field ) => (
    <label className={styles.inputContainer}>
      <FormInput {...field} {...formInputStyles}/>
      <FormError meta={field.meta} className={styles.fieldWarning}/>
    </label>
  );

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Field name='email'
             type='text'
             placeholder='Email Address'
             component={renderField}/>
      <Field name='password'
             component={renderField}
             type='password'
             placeholder='Password'
      />
      <button type='submit' disabled={submitting}
              className={styles.submitContainer}>
            <span className={styles.inscription}>{isFetching
                                                  ? 'Submitting...'
                                                  : 'LOGIN'}</span>
      </button>
    </form>
  );
};

export default reduxForm( {
  form: 'login',
  validate: customValidator( Schemes.LoginSchem ),
} )( LoginForm );