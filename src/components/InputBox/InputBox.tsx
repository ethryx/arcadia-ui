import * as React from 'react';
import './InputBox.css';

class InputBox extends React.Component {

  render() {
    return (
      <div className="InputBox">
        <div className="InputBox-left">&nbsp;</div>
        <div className="InputBox-middle">&nbsp;</div>
        <div className="InputBox-right">&nbsp;</div>
        <div className="InputBox-chatBubble">&nbsp;</div>
        <div className="InputBox-input">
          <input type="text" placeholder="What would you like to do or say?" />
        </div>
      </div>
    );
  }

}

export default InputBox;
