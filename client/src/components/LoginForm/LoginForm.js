import React                          from 'react';
import styles                         from './LoginForm.module.sass';
import { Field, reduxForm }           from 'redux-form';
import FormInput                      from '../FormInput/FormInput';
import customValidator                from '../../validators/validator';
import Schemes                        from '../../validators/validationSchems';

const LoginForm = props => {
  const { isFetching, handleSubmit, submitting } = props;

  const formInputClasses = {
    containerStyles: styles.inputContainer,
    inputStyles: styles.input,
    warningStyles: styles.fieldWarning,
    invalidStyles: styles.notValid,
    validStyles: styles.valid,
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Field
        name='email'
        {...formInputClasses}
        component={FormInput}
        type='text'
        label='Email Address'
      />
      <Field
        name='password'
        {...formInputClasses}
        component={FormInput}
        type='password'
        label='password'
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

export default  reduxForm( {
  form: 'login',
  validate: customValidator( Schemes.LoginSchem ),
} )( LoginForm );