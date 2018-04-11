import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Piano from './Piano'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Piano />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
