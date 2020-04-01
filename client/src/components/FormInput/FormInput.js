import React      from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types';

const FormInput = ( props ) => {

  const {
    label, input, type,
    containerStyles,
    inputStyles,
    warningStyles,
    invalidStyles,
    validStyles,
    meta: { touched, error }
  } = props;

  const computedInputStyles = classNames( inputStyles, {
    [ invalidStyles ]: touched && error,
    [ validStyles ]: touched && !error,
  } );

  return (
    <div className={containerStyles}>
      <input {...input} placeholder={label} type={type}
             className={computedInputStyles}/>
      {warningStyles && ( touched &&
        ( error && <span className={warningStyles}>{error}</span> ) )}
    </div>
  );
};


FormInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,

  containerStyles: PropTypes.string,
  inputStyles: PropTypes.string,
  warningStyles: PropTypes.string,
  invalidStyles: PropTypes.string,
  validStyles: PropTypes.string,
};

export default FormInput;

