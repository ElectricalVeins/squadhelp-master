import React     from 'react';
import PropTypes from 'prop-types';

const Question = props => {
  const { head, body, headerClassName, bodyClassName } = props;
  return (
    <div>
      <div className={headerClassName}>
        {
          head
        }
      </div>
      <div className={bodyClassName}>
        {
          body
        }
      </div>
    </div>
  );
};

Question.propTypes = {
  head: PropTypes.string,
  body: PropTypes.string,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string
};

export default Question;