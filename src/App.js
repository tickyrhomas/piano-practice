import React, { Component } from 'react'
import Router from './Router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
