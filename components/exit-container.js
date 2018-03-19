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
  Modal,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import { OFFSTAGE, ROUTESTAGE, MAINSTAGE } from '../actions/event-action';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';
import SliderPresenter from './presenters/slider-presenter';
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
      <View style={ { marginTop: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 2, width:width } } />
    )
  }

  renderStat = (str1, str2, str3) => {
    return (
      <View style={{
        marginLeft: 5,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ { ...styles.subSubTitleText, color:'#092e4c' } }>{str1}</Text>
        <Text style={ {
          ...styles.subSubTitleText,
          fontSize: 30,
          color: '#ee4e22'
        } }> {str2} </Text>
        <Text style={ { ...styles.subSubTitleText, color:'#092e4c' } }>{str3}</Text>
      </View>
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
            <Text style={ {...styles.subSubTitleText, fontSize:30} }> {"Qucik Questions..."} </Text>
            { this.renderDivider('90%') }
            <View contentContainer= { { alignItems: 'center' } } style={ { marginBottom: 50, width: '100%' } }>
              <SliderPresenter numerical={false} title="Feel good?"/>
              { this.renderStat("You walked", "2000", "steps!") }
              { this.renderDivider() }
              <SliderPresenter numerical={false} title="Enjoy the event?"/>
              { this.renderStat("You spent", "1h", "outside!") }
              { this.renderDivider() }
              <SliderPresenter numerical={false} title="Event specified (squirrel cute)?"/>
            </View>

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
