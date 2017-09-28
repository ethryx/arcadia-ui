import * as React from 'react';
import './VitalBar.css';

export interface Props {
  currentValue?: number;
  maxValue?: number;
}

class VitalBar extends React.Component<Props, object> {

  render() {
    // const { currentValue = 100, maxValue = 100 } = this.props;

    return (
      <div className="VitalBar">
        <div className="VitalBar-circle">
          &nbsp;
        </div>
        <div className="VitalBar-bar">
          <div className="VitalBar-bar-middle">&nbsp;</div>
          <div className="VitalBar-bar-right">&nbsp;</div>
        </div>
      </div>
    );
  }

}

export default VitalBar;
