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
  Slider,
  Modal
} from 'react-native';
import MapView from 'react-native-maps';
import { OFFSTAGE, ROUTESTAGE, MAINSTAGE } from '../actions/event-action';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';
import  * as activityActions from '../actions/activity-action';
import  * as eventActions from '../actions/event-action';

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true,
    };
  }

  onBack = () => {
    this.props.eventActions.mainStage(this.props.eventObj)
    Actions.pop();
  }

  renderSubtitle = (str) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ styles.subSubTitleText }> {str} </Text>
      </View>
    )
  }

  renderDivider = (width='75%') => {
    return (
      <View style={ { marginTop: 10, marginBottom: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 2, width:width } } />
    )
  }

  onSubmit = () => {
    this.props.activityActions.endEvent();
    this.props.eventActions.submitEvent(this.props.eventObj);
    Actions.pop()
    Actions.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft='Exit' titleRight='Survey' onBack={ this.onBack }/>
        <View style={styles.body}>

          <View style={styles.cardContainer}>
            { this.renderSubtitle("Tracker 1?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            { this.renderSubtitle("Tracker 2?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            <TouchableOpacity style={ styles.submitButton } onPress={ this.onSubmit } >
              <Text style={ styles.submitText }>Submit!</Text>
            </TouchableOpacity>
          </View>

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
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    flex: 1,
    width: '95%',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  submitButton: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    paddingTop: 3,
    backgroundColor: '#fa4900',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
  subSubTitleText: {
    fontFamily: 'Avenir-Black',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
};

function mapStateToProps(state) {
  return {
    stage: state.EventReducer.stage,
    eventObj: state.EventReducer.eventObj,
  };
}


function mapDispatchToPropos(dispatch) {
  return {
    activityActions: bindActionCreators(activityActions, dispatch),
    eventActions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(EventContainer);
