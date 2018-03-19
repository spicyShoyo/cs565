import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing
} from 'react-native';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';

import { OFFSTAGE } from '../actions/event-action'
import * as reviewActions from '../actions/review-action'

import { VictoryBar } from "victory-native";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  gotToReview = () => {
    this.props.reviewActions.loadEvents();
    Actions.reviewScene();
  }

  goToToday = () => {
    Actions.todayScene();
  }

  goToMap = () => {
    this.props.reviewActions.loadEvents();
    Actions.mapScene();
  }

  goToEvent = () => {
    Actions.eventScene();
  }

  renderEvent = () => {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.4, 1, 0.4]
    })
    if (this.props.stage === OFFSTAGE) {
      return (
        <TouchableOpacity style={{...styles.button, width: 400, height: 125, marginTop: 100}} onPress={this.goToToday} >
          <Text style={{...styles.text, marginLeft: 10}}> >> Today </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={{...styles.button, width: 400, height: 100, marginTop: 100}} onPress={this.goToEvent} >
          <Animated.View
          style={{
            opacity,
            backgroundColor: 'transparent'}} >
            <Text style={{...styles.text, marginLeft: 125}}> Event! </Text>
          </Animated.View>
        </TouchableOpacity>
      )

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Out" titleRight="There"/>
        <ImageBackground source={require('../images/homeimg1.png')} style={styles.backgroundImage}>
        <View style={styles.body}>
          <View>
            <TouchableOpacity style={{...styles.button, width: 400, height: 100}} onPress={this.gotToReview}>
              <Text style={{...styles.text, marginLeft: 50}}> Review </Text>
            </TouchableOpacity>
          </View>
          { this.renderEvent() }
          <TouchableOpacity style={{...styles.button, width: 400, height: 100, marginTop: 80}} onPress={this.goToMap}>
            <Text style={{...styles.text, marginLeft: 50}}> Map </Text>
          </TouchableOpacity>

        </View>
        </ImageBackground>
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
    // alignItems: 'center',
    padding: 10,
    backgroundColor:'transparent'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontFamily: 'AvenirNextCondensed-HeavyItalic',
    color: 'white',
    fontSize: 75,
  },
};

function mapStateToProps(state) {
  return {
    eventStarted: state.ActivityReducer.eventStarted,
    stage: state.EventReducer.stage,
    eventIdx: state.ActivityReducer.eventIdx,
  };
}


function mapDispatchToPropos(dispatch) {
  return {
    reviewActions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(HomeContainer);
