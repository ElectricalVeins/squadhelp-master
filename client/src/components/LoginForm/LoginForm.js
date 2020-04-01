import React                          from 'react';
import { connect }                    from 'react-redux';
import { authActionLogin, clearAuth } from '../../actions/actionCreator';
import styles                         from './LoginForm.module.sass';
import { Field, reduxForm }           from 'redux-form';
import FormInput                      from '../FormInput/FormInput';
import customValidator                from '../../validators/validator';
import Schemes                        from '../../validators/validationSchems';
import Error                          from '../../components/Error/Error';

class LoginForm extends React.Component {

  componentWillUnmount() {
    this.props.authClear();
  }

  handleSubmit = ( values ) => {
    this.props.loginRequest( values );
  };

  render() {
    const { auth: { error, isFetching } } = this.props;
    const { handleSubmit, submitting, authClear } = this.props;

    const formInputClasses = {
      container: styles.inputContainer,
      input: styles.input,
      warning: styles.fieldWarning,
      notValid: styles.notValid,
      valid: styles.valid,
    };

    return (
      <div className={styles.loginForm}>
        {
          error && <Error data={error.data}
                          status={error.status}
                          clearError={authClear}/>
        }

        <form onSubmit={handleSubmit( this.handleSubmit )}>
          <Field
            name='email'
            classes={formInputClasses}
            component={FormInput}
            type='text'
            label='Email Address'
          />
          <Field
            name='password'
            classes={formInputClasses}
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
      </div>
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