import React                                                    from 'react';
import LoginForm
                                                                from '../../components/LoginForm/LoginForm';
import Logo                                                     from '../../components/Logo';
import styles                                                   from './LoginPage.module.sass';
import { Link }                                                 from 'react-router-dom';
import { connect }                                              from 'react-redux';
import { authActionLogin, clearAuth, clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS                                                from '../../constants';
import Error                                                    from "../../components/Error/Error";

const LoginPage = ( props ) => {

  const {  error, isFetching, authClear, loginRequest } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
          <div className={styles.linkLoginContainer}>
            <Link to='/registration'
                  style={{ textDecoration: 'none' }}><span>SignUp</span></Link>
          </div>
        </div>
        <div className={styles.loginFormContainer}>
          <h2>LOGIN TO YOUR ACCOUNT</h2>
          <div>
            {
              error && <Error data={error.data}
                              status={error.status}
                              clearError={authClear}/>
            }
            <LoginForm isFetching={isFetching} onSubmit={loginRequest}/>
          </div>
        </div>
      </div>
    </div>
  );

};

const mapStateToProps = ( state ) => {
  return {
    ...state.auth
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    clearError: () => dispatch( clearErrorSignUpAndLogin() ),
    loginRequest: ( data ) => dispatch( authActionLogin( data ) ),
    authClear: () => dispatch( clearAuth() ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage );