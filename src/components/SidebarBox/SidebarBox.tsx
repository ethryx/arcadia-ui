import * as React from 'react';
import './SidebarBox.css';

export interface Props {
  title?: string;
  height?: number;
}

class SidebarBox extends React.Component<Props, object> {

  render() {
    const { title = 'Untitled' } = this.props;

    return (
      <div className="SidebarBox">
        <div className="SidebarBox-header">
          <div className="SidebarBox-header-title">
            {title}
          </div>
        </div>
        <div className="SidebarBox-middle" style={{height: this.props.height + 'px'}}>
          <div className="SidebarBox-content">
            {this.props.children}
          </div>
        </div>
        <div className="SidebarBox-footer">
          &nbsp;
        </div>
      </div>
    );
  }

}

export default SidebarBox;
