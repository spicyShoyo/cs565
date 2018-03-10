import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';

class HomeContainer extends React.Component {
  gotToReview = () => {
    Actions.reviewScene();
  }

  goToToday = () => {
    Actions.todayScene();
  }

  goToMap = () => {
    Actions.mapScene();
  }

  goToEvent = () => {
    Actions.eventScene();
  }

  renderEvent = () => {
    if (!this.props.eventStarted) {
      return (
        <TouchableOpacity style={styles.button} onPress={this.goToToday} >
          <Text> Go To Today </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.button} onPress={this.goToEvent} >
          <Text> Go To Event </Text>
        </TouchableOpacity>
      )

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Out" titleRight="There"/>
        <View style={styles.body}>

          <TouchableOpacity style={styles.button} onPress={this.gotToReview}>
            <Text> Go To Review </Text>
          </TouchableOpacity>
          { this.renderEvent() }
          <TouchableOpacity style={styles.button} onPress={this.goToMap}>
            <Text> Go To Map </Text>
          </TouchableOpacity>

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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
};

function mapStateToProps(state) {
  return {
    eventStarted: state.ActivityReducer.eventStarted,
    eventIdx: state.ActivityReducer.eventIdx,
  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(HomeContainer);
