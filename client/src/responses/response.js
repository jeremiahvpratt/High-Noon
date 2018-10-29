import React from 'react';
import PropTypes from 'prop-types';

const Response = props => (
  <div className="singleResponse">
    <div className="textContent">
      <div className="singleResponseContent">
        <p>{props.response} ............ {props.time}</p>
      </div>
    </div>
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Response;
