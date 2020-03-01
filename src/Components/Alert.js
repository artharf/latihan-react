import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux'

const AlertCustom = (props) => {
  return (
    <div>
      <Alert color={props.color}>
        {
          props.content
          ?
          props.content
          :
          null
        }
      </Alert>
    </div>
  );
};

export default AlertCustom;