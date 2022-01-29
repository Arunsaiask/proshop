import React from 'react';
import {Alert} from "react-bootstrap"

//variant and children are props we get when we fire error
const MessageAlert = ({variant,children}) => {
  return <>
     <Alert variant={variant}>
       {children}
     </Alert>
  </>
}

MessageAlert.defaultProps = {
    variant: "info"
}



export default MessageAlert;
