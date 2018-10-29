import React from 'react';
import PropTypes from 'prop-types';

const Question = props => (
  <div className="singleQuestion">
    <div className="textContent">
      <div className="singleQuestionContent">
        <a href='look' onClick={() => {props.sendResponse(props.question)} }>
          {props.question}
        </a>
      </div>
      <div className="singleQuestionButton">
      </div>
    </div>
  </div>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Question;
