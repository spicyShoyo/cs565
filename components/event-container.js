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

import BinaryTrackerPresenter from './presenters/binary-tracker-presenter';
import PhotoTrackerPresenter from './presenters/photo-tracker-presenter';
import CounterTrackerPresenter from './presenters/counter-tracker-presenter';
import TextTrackerPresenter from './presenters/text-tracker-presenter';

const BINARY = "BINARY";
const COUNTER = "COUNTER";
const PHOTO = "PHOTO";
const TEXT = "TEXT";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true,
    };
  }

  onBack = () => {
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

  mainStage = () => {
    this.props.eventActions.mainStage(this.props.eventObj)
  }

  exitStage = () => {
    this.props.eventActions.exitStage(this.props.eventObj);
    Actions.exitContainer();
  }

  renderBody = () => {
    return (
      <View style={styles.cardContainer}>
        { this.props.eventObj.info.trackers.map((tracker, index) => {
          switch (tracker.type) {
            case BINARY:
              return (<BinaryTrackerPresenter key={index} title={tracker.title}/>);
            case COUNTER:
              return (<CounterTrackerPresenter key={index} title={tracker.title} emoji={tracker.emoji}/>);
            case PHOTO:
              return (<PhotoTrackerPresenter key={index} title={tracker.title}/>);
            case TEXT:
              return (<TextTrackerPresenter key={index} title={tracker.title}/>);
            default:
              return (<BinaryTrackerPresenter key={index} title={tracker.title}/>);
          }
        })}

        <TouchableOpacity style={ styles.submitButtonBlue } onPress={ this.exitStage } >
          <Text style={ styles.submitText }>End!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderModal = () => {
    return (
      <View style={styles.cardContainer}>
        <MapView
          initialRegion={{
            longitude: this.props.eventObj.info.longitude,
            latitude: this.props.eventObj.info.latitude,
            latitudeDelta: 9.22,
            longitudeDelta: 4.21,
          }}
          minZoomLevel={15}
          style={ {
            ...StyleSheet.absoluteFillObject,
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            marginLeft: 2,
            marginBottom: 45,
          } }
        >
          <MapView.Marker
            renderMarker={() => {}}
            key={1}
            coordinate={{longitude: this.props.eventObj.info.longitude, latitude: this.props.eventObj.info.latitude}}
          >
          </MapView.Marker>
        </MapView>
        <TouchableOpacity style={ styles.submitButtonOrange } eventIdx={0} onPress={ this.mainStage } >
          <Text style={ styles.submitText }>I'm There!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { ((this.props.stage) === OFFSTAGE) ?
          <ToolbarPresenter titleLeft="Ev" titleRight="ent" onBack={ this.onBack }/>
          :
          <ToolbarPresenter titleLeft={this.props.eventObj.info.titleLeft} titleRight={this.props.eventObj.info.titleRight} onBack={ this.onBack }/>
        }
        <View style={styles.body}>

          { ((this.props.stage) === ROUTESTAGE && (this.state.modalShow)) ? this.renderModal() : this.renderBody() }

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
  submitButtonBlue: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    paddingTop: 3,
    backgroundColor: '#092e4c',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitButtonOrange: {
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
