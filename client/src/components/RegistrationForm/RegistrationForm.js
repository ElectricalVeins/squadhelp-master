import React                from 'react';
import styles               from './RegistrationForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput            from '../FormInput/FormInput';
import RoleInput            from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput
                            from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS            from '../../constants';
import customValidator      from '../../validators/validator';
import Schemes              from '../../validators/validationSchems';

const RegistrationForm = props => {

  const { handleSubmit, submitting } = props;

  const formInputClasses = {
    containerStyles: styles.inputContainer,
    inputStyles: styles.input,
    warningStyles: styles.fieldWarning,
    invalidStyles: styles.notValid,
    validStyles: styles.valid,
  };

  return (
    <form className={styles.signUpFormContainer}
          onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Field
          name='firstName'
          {...formInputClasses}
          component={FormInput}
          type='text'
          label='First name'
        />
        <Field
          name='lastName'
          {...formInputClasses}
          component={FormInput}
          type='text'
          label='Last name'
        />
      </div>
      <div className={styles.row}>
        <Field
          name='displayName'
          {...formInputClasses}
          component={FormInput}
          type='text'
          label='Display Name'
        />
        <Field
          name='email'
          {...formInputClasses}
          component={FormInput}
          type='text'
          label='Email Address'
        />
      </div>
      <div className={styles.row}>
        <Field
          name='password'
          {...formInputClasses}
          component={FormInput}
          type='password'
          label='Password'
        />
        <Field
          name='confirmPassword'
          {...formInputClasses}
          component={FormInput}
          type='password'
          label='Password confirmation'
        />
      </div>
      <div className={styles.choseRoleContainer}>
        <Field name='role' type='radio' value={CONSTANTS.CUSTOMER}
               strRole='Join As a Buyer'
               infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
               component={RoleInput} id={CONSTANTS.CUSTOMER}/>
        <Field name='role' type='radio' value={CONSTANTS.CREATOR}
               strRole='Join As a Creative'
               infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
               component={RoleInput} id={CONSTANTS.CREATOR}/>
      </div>
      <div className={styles.termsOfService}>
        <Field
          name='agreeOfTerms'
          classes={{
            container: styles.termsOfService,
            warning: styles.fieldWarning,
          }}
          id='termsOfService'
          component={AgreeTermOfServiceInput}
          type='checkbox'
        />

      </div>
      <button type='submit'
              disabled={submitting}
              className={styles.submitContainer}>
        <span className={styles.inscription}>Create Account</span>
      </button>
    </form>
  );
}


export default reduxForm( {
  form: 'login',
  validate: customValidator( Schemes.RegistrationSchem ),
} )( RegistrationForm );