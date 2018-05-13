import React, { Component } from 'react'
import {AppBar, Drawer, MenuItem} from 'material-ui'
import Piano from './Piano'
import {Link, withRouter} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle_open = this.toggle_open.bind(this)
  }
  
  toggle_open() {
    this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="YASSSSSSSSSS"
          onLeftIconButtonClick={this.toggle_open}
        />

        <Drawer open={this.state.open}>
          <MenuItem onClick={this.toggle_open}>Close Drawer!</MenuItem>
          <MenuItem onClick={()=>{this.props.history.push('/')}}>Home</MenuItem>
          <hr/>
          <MenuItem onClick={()=>{this.props.history.push('/piano')}}>Chord Changer 1.0</MenuItem>
          <MenuItem onClick={()=>{this.props.history.push('/written')}}>Written</MenuItem>
        </Drawer>  
      </div>
    );
  }
}




// export default class DrawerSimpleExample extends React.Component {



//   handleToggle = () => this.setState({open: !this.state.open});

//   render() {
//     return (
//       <div>
//         <RaisedButton
//           label="Toggle Drawer"
//           onClick={this.handleToggle}
//         />
        
//       </div>
//     );
//   }
// }

export default withRouter(Main);
