import React      from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types';

const FormInput = ( props ) => {

  const {
    label, input, type,
    containerClassName,
    inputClassName,
    warningClassName,
    notValidClassName,
    validClassName,
    meta: { touched, error }
  } = props;

  const computedInputClassName = classNames( inputClassName, {
    [ notValidClassName ]: touched && error,
    [ validClassName ]: touched && !error,
  } );

  return (
    <div className={containerClassName}>
      <input {...input} placeholder={label} type={type}
             className={computedInputClassName}/>
      {warningClassName && ( touched &&
        ( error && <span className={warningClassName}>{error}</span> ) )}
    </div>
  );
};


FormInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,

  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  warningClassName: PropTypes.string,
  notValidClassName: PropTypes.string,
  validClassName: PropTypes.string,
};

export default FormInput;

