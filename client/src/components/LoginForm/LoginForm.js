import React                          from 'react';
import { connect }                    from 'react-redux';
import { authActionLogin, clearAuth } from '../../actions/actionCreator';
import styles                         from './LoginForm.module.sass';
import { Field, reduxForm }           from 'redux-form';
import FormInput                      from '../FormInput/FormInput';
import customValidator                from '../../validators/validator';
import Schemes                        from '../../validators/validationSchems';

class LoginForm extends React.Component {

  componentWillUnmount() {
    this.props.authClear();
  }

  handleSubmit = ( values ) => {
    this.props.loginRequest( values );
  };

  render() {
    const { auth: { isFetching }, handleSubmit, submitting } = this.props;

    const formInputClasses = {
      containerStyles: styles.inputContainer,
      inputStyles: styles.input,
      warningStyles: styles.fieldWarning,
      invalidStyles: styles.notValid,
      validStyles: styles.valid,
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit( this.handleSubmit )}>
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
  }
}

const mapStateToProps = ( state ) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = ( dispatch ) => (
  {
    loginRequest: ( data ) => dispatch( authActionLogin( data ) ),
    authClear: () => dispatch( clearAuth() ),
  }
);

export default connect( mapStateToProps, mapDispatchToProps )( reduxForm( {
  form: 'login',
  validate: customValidator( Schemes.LoginSchem ),
} )( LoginForm ) );