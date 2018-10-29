import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';

const QuestionList = (props) => {
  const questionNodes = props.data.map(q => (
    <Question
      key={q._id} id={q._id}
      question={q.question}
      timestamp={q.updatedAt}
      sendResponse={props.sendResponse}/>
    //   { q.question }
    // </Question>
  ));
  return (
    <div>
      { questionNodes }
    </div>
  );
};

QuestionList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
  })),
};

QuestionList.defaultProps = {
  data: [],
};

export default QuestionList;
