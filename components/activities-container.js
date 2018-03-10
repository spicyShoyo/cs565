import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps';

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';
import ActivityCardPresenter from './activity-card-presenter';
import ActivityModalPresenter from './activity-modal-presenter';

import  * as activityActions from '../actions/activity-action';
import  * as eventActions from '../actions/event-action';

class ActivitiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      activityInfo: null,
    };
  }

  onBack = () => {
    Actions.pop();
    Actions.pop(); // pop to home
  }

  onCardPress = (index, activityInfo) => {
    this.setState({
      modalShow: true,
      activityInfo: activityInfo,
    })
  }

  onModalClose = () => {
    this.setState({ modalShow: false });
  }

  onModalSubmit = (index) => {
    this.startEvent(0);
    this.setState({ modalShow: false });
    Actions.pop();
    Actions.pop();
    Actions.eventScene();
  }

  renderProgress = () => {
    return (
      <View style={{paddingTop: 50, alignItems: 'center',}}>
        <Text style={{...styles.headerFontStyle, color: 'black'}}>Loading...</Text>
        <View style={styles.spinner}>
            <ActivityIndicator size="large" color="black"/>
        </View>
      </View>
    )
  }

  startEvent = (eventIdx) => {
    this.props.activityActions.startEvent(eventIdx);
    this.props.eventActions.routeStage(this.props.recommendedActivities[eventIdx]);
  }

  renderBody = () => {
    console.log(this.props.recommendedActivities)
    return (
      <View style={styles.cardContainer}>
        <ScrollView style={ { marginBottom: 50 } }>
          {this.props.recommendedActivities.map((activityObj, index) => {
            return (
              <ActivityCardPresenter
                key={index}
                index={index}
                activityInfo={ activityObj.info }
                onPress={this.onCardPress}/>
            )
          })}
          <ActivityModalPresenter modalShow={this.state.modalShow} onModalClose={this.onModalClose} onModalSubmit={this.onModalSubmit} activityInfo={this.state.activityInfo}/>
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Act" titleRight="ivities" onBack={ this.onBack }/>
        <View style={styles.body}>

          { this.props.loadingActivities ? this.renderProgress() : this.renderBody() }

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

  modalContainer: {
    marginLeft:9.5,
    height: 402,
    width: '95%',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#ee4e22',
    alignItems: 'center',
  },
  spinner: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
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
  submitText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
};

const chipStyles = {
  body: {
    width: 325,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#ffffff',
  },

  titleText: {
    fontFamily: 'Avenir-Black',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },

  statusText: {
    fontFamily: 'Avenir-Black',
    color: 'darkgrey',
    fontSize: 20,
  },

  buttonText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 15,
  },

  submitButton: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 25,
    backgroundColor: 'darkgrey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  headerFontStyle: {
    fontFamily: 'Avenir-Black',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
};


function mapStateToProps(state) {
  return {
    loadingActivities: state.ActivityReducer.loadingActivities,
    recommendedActivities: state.ActivityReducer.recommendedActivities,
  };
}


function mapDispatchToPropos(dispatch) {
  return {
    activityActions: bindActionCreators(activityActions, dispatch),
    eventActions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(ActivitiesContainer);
