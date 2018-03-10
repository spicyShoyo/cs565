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

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';
import  * as activityActions from '../actions/activity-action';

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

  renderBody = () => {

  }

  renderModal = () => {
    return (
      <View style={styles.cardContainer}>
        <MapView
          initialRegion={{
            longitude: -88.2434,
            latitude: 40.1164,
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
        </MapView>
        <TouchableOpacity style={ styles.submitButton } eventIdx={0} onPress={ () => {
          this.startEvent(0);
          this.setState({ modalShow: false });
          Actions.pop();
          Actions.pop();
          Actions.eventScene();
        } } >
          <Text style={ styles.submitText }>I'm There!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Ev" titleRight="ent" onBack={ this.onBack }/>
        <View style={styles.body}>

          { this.state.modalShow ? this.renderModal() : this.renderBody() }


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

  };
}


function mapDispatchToPropos(dispatch) {
  return {
    activityActions: bindActionCreators(activityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(EventContainer);
