import React, { Component } from 'react';
import 'whatwg-fetch';
import ResponseList from './responseList';

class ResponsePage extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      error: null,
      question: ''
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadResponsesFromServer();
    if( !this.pollInterval){
      this.pollInterval = setInterval(this.loadResponsesFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadResponsesFromServer = () => {

    fetch('/api/responses', {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
       })
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error});
        else this.setState({ data: res.data });
        console.log(res.data);
      });
  }

  clearResponses() {
    fetch('api/responses', { method: 'DELETE' })
      .then(res => res.json()).then((res) => {
        if (!res.success) this.setState({ error: res.error});
      });
  }

  render() {
    return (
      <div className="container">
        <div className="responses">
          <h1>Look!</h1>
          <p onClick={() => this.clearResponses()}>remember?</p>
          <ResponseList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default ResponsePage;
