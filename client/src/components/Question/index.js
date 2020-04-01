import React     from 'react';
import PropTypes from 'prop-types';

const Question = props => {
  const { head, body, className } = props;
  return (
    <div className={className}>
      <header>
        {
          head
        }
      </header>
      <section>
        {
          body
        }
      </section>
    </div>
  );
};

Question.propTypes = {
  head: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
};

export default Question;