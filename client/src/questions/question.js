import React from 'react';
import PropTypes from 'prop-types';
import './questionPage.css';

const Question = props => (
  <div className="singleQuestion">
    <div className="textContent">
      <div className="singleQuestionContent">
        <a
          href='look'
          onClick={() => {props.sendResponse(props.question)}}
          className="singleQuestionContent">
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
