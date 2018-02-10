import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import NewTherapyPresenter from '../presenters/new-therapy-presenter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  toggleDrawer = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="ArgoPortal"
            onLeftIconButtonClick={this.toggleDrawer}
          />
          <Drawer open={this.state.drawerOpen}>
            <AppBar
              title="ArgoPortal"
              onLeftIconButtonClick={this.toggleDrawer}
            />
            <MenuItem>Therapies</MenuItem>
          </Drawer>
          <NewTherapyPresenter open={true} />
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(Home);
