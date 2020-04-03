import React     from 'react';
import PropTypes from 'prop-types';

const FieldError = props => {
  const { meta: { touched, error },className } = props;
  return (
    <>
      {
        touched && error && <div className={className}>{error}</div>
      }
    </>
  );
};

FieldError.propTypes = {

};

export default FieldError;