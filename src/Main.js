import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {AppBar, Drawer, MenuItem} from 'material-ui'
import Piano from './Piano'
import {Link, withRouter} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle_open = this.toggle_open.bind(this)
    this.menu_item_click = this.menu_item_click.bind(this)
  }
  
  toggle_open() {
    this.setState({open: !this.state.open})
  }
  menu_item_click({path}) {
    this.setState({open: false})
    this.props.history.push(path)
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="YASSSSSSSSSS"
          onLeftIconButtonClick={this.toggle_open}
        />

        <Drawer 
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Navigation"
            onLeftIconButtonClick={this.toggle_open}
          />
          <MenuItem onClick={()=>{this.menu_item_click({path:'/'})}}>Home</MenuItem>
          <hr/>
          <MenuItem onClick={()=>{this.menu_item_click({path:'/piano'})}}>Chord Changer 1.0</MenuItem>
          <MenuItem onClick={()=>{this.menu_item_click({path:'/written'})}}>Written</MenuItem>
        </Drawer>  
      </div>
    );
  }
}

Main.propTypes = {
  history: PropTypes.func
}

export default withRouter(Main);
