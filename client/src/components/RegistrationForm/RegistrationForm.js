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
import FormError            from "../FieldError";

const RegistrationForm = props => {
  const { handleSubmit, submitting } = props;

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
    <form className={styles.signUpFormContainer}
          onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Field name='firstName'
               type='text'
               placeholder='First name'
               component={renderField}/>
        <Field name='lastName'
               type='text'
               placeholder='Last name'
               component={renderField}/>
      </div>
      <div className={styles.row}>
        <Field name='displayName'
               type='text'
               placeholder='Display Name'
               component={renderField}/>
        <Field name='email'
               type='text'
               placeholder='Email Address'
               component={renderField}/>
      </div>
      <div className={styles.row}>
        <Field name='password'
               type='password'
               placeholder='Password'
               component={renderField}/>
        <Field name='confirmPassword'
               type='password'
               placeholder='Password confirmation'
               component={renderField}/>
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
          type='checkbox'/>

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
  form: 'register',
  initialValues: {
    role: CONSTANTS.CUSTOMER,
  },
  validate: customValidator( Schemes.RegistrationSchem ),
} )( RegistrationForm );