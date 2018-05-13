import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
