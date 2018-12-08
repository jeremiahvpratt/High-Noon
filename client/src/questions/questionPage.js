import React, { Component } from 'react';
import QuestionList from './questionList';
import QUESTIONS from './questions';

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = { data: []};
  }
  onSubmitResponse = (question) => {
    fetch('/api/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({question}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error});
      else this.setState({ question: ''});
    });
  }
  render() {
    return (
      <div class="questionBody">
        <div>
          <h1>When?</h1>
          <QuestionList
            data={QUESTIONS}
            sendResponse={this.onSubmitResponse} />
        </div>
      </div>
    );
  }
}

export default QuestionPage;
