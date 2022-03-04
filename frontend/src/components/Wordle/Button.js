import React from 'react';
import Button from 'react-bootstrap/Button'

const wordleButton = (props) => {
    return (
    <div>
        <Button onClick={props.buttonHandler} variant={props.variant} className="custom-btn-toolbar .btn" size="sm">
        {props.name}
        </Button>
    </div>
    )
  }

export default wordleButton;