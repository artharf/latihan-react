import React from 'react';
import { Alert } from 'reactstrap';


const AlertWelcome = (props) => {
  return (
    <div>
      <Alert color={props.color}>
        {
          props.userlogin
          ?
          `welcome back ${props.userlogin}`
          :
          null
        }
      </Alert>
    </div>
  );
};

export default AlertWelcome;