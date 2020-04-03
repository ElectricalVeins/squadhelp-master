import React      from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types';

const FormInput = ( props ) => {

  const {
    placeholder,
    input, type,
    inputStyles,
    invalidStyles,
    validStyles,
    meta: { touched, error },
  } = props;
console.log(input)
  const computedInputStyles = classNames( inputStyles, {
    [ invalidStyles ]: touched && error,
    [ validStyles ]: touched && !error,
  } );

  return (
      <input {...input}
             placeholder={placeholder}
             type={type}
             className={computedInputStyles}/>
  );
};


FormInput.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,

  inputStyles: PropTypes.string,
  invalidStyles: PropTypes.string,
  validStyles: PropTypes.string,
};

export default FormInput;

