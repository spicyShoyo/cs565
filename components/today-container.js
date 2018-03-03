import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';

class TodayContainer extends React.Component {
  onBack = () => {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="To" titleRight="day" onBack={ this.onBack }/>
        <View style={styles.body}>

          <Text>Today</Text>

        </View>
        <FooterPresenter/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
};

function mapStateToProps(state) {
  return {

  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(TodayContainer);
