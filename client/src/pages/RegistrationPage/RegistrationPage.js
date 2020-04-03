import React       from 'react';
import Logo        from '../../components/Logo';
import RegistrationForm
                   from '../../components/RegistrationForm/RegistrationForm';
import styles      from './RegistrationPage.module.sass';
import { Link }    from 'react-router-dom';
import { connect } from 'react-redux';
import {
  authActionRegister,
  clearAuth,
  clearErrorSignUpAndLogin
}                  from '../../actions/actionCreator';
import CONSTANTS   from '../../constants';
import faq         from './faq.json'
import Question    from "../../components/Question";
import Error       from "../../components/Error/Error";
import _           from 'lodash';

const RegistrationPage = ( props ) => {

  const { authClear,  error, signUp } = props;

  const faqElements = faq.map( ( question, index ) => (
    <Question key={index}
              body={question.body}
              head={question.head}
              className={styles.questionsContainer}/> )
  );

  const handleSubmit = ( data ) => {
    signUp( _.omit( data, [ 'confirmPassword', 'agreeOfTerms' ] ) );
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}/>
          <div className={styles.linkLoginContainer}>
            <Link to='/login'
                  style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <div className={styles.headerFormContainer}>
          <h2>
            CREATE AN ACCOUNT
          </h2>
          <h4>
            We always keep your name and email address private.
          </h4>
        </div>
        <div>

          {error && <Error data={error.data}
                           status={error.status}
                           clearError={authClear}/>}

          <RegistrationForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          <div className={styles.ColumnContainer}>
            {faqElements}
            <div className={styles.article}>
              Check out our <span className={styles.orangeSpan}>FAQs</span> or
              send us a <span
              className={styles.orangeSpan}>message</span>. For assistance
              with launching a contest,
              you can also call us at (877) 355-3585 or schedule a <span
              className={styles.orangeSpan}>Branding Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = ( state ) => {
  return {
    ...state.auth
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    authClear: () => dispatch( clearAuth() ),
    clearError: () => dispatch( clearErrorSignUpAndLogin() ),
    signUp: ( data ) => dispatch( authActionRegister( data ) ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( RegistrationPage );