// Node-related imports
import * as React from 'react';
// Custom components
import SidebarBox from '../SidebarBox/SidebarBox';
import MainTextBox from '../MainTextBox/MainTextBox';
import InputBox from '../InputBox/InputBox';
import VitalBar from '../VitalBar/VitalBar';
// Local imports from current component
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-leftSidebar">
          <SidebarBox title="You" height={90}>
            <VitalBar />
            <VitalBar />
          </SidebarBox>
          <SidebarBox title="Quests" height={80} />
        </div>
        <div className="App-mainArea">
          <MainTextBox />
          <InputBox />
        </div>
        <div className="App-rightSidebar">
          <SidebarBox title="Area Map" height={80} />
          <SidebarBox title="Here With You" height={80} />
        </div>
      </div>
    );
  }
}

export default App;
