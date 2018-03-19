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
import MapView from 'react-native-maps';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';
import EventModalPresenter from './presenters/event-modal-presenter';

import SquirrelsEvent from '../events/squirrels-event';
import CornEvent from '../events/corn-event';
import SingleEvent from '../events/single-event';
import MusicEvent from '../events/music-event';

const eventArr = [
  new SquirrelsEvent({}),
  new CornEvent({}),
  new SingleEvent({}),
  new MusicEvent({}),
];

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      eventObj: new SquirrelsEvent({}),
      eventIdx: 0
    };
  }

  onBack = () => {
    Actions.pop();
  }

  onModalClose = () => {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="M" titleRight="ap" onBack={ this.onBack }/>
        <View style={styles.body}>

          <MapView
            initialRegion={{
              longitude: -88.23,
              latitude: 40.1164,
              latitudeDelta: 9.22,
              longitudeDelta: 4.21,
            }}
            minZoomLevel={12}
            style={StyleSheet.absoluteFillObject}
          >
            { eventArr.map((eventObj, index) => {
              return (
                <MapView.Marker
                  renderMarker={() => {}}
                  key={index}
                  coordinate={{longitude: eventObj.info.longitude, latitude: eventObj.info.latitude}}
                  onPress={()=>{this.setState({modalShow: true, eventObj: eventObj})}}
                >
                </MapView.Marker>
              )
            })}

          </MapView>
          <EventModalPresenter modalShow={this.state.modalShow} onModalClose={this.onModalClose} eventInfo={this.state.eventObj.info}/>
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

export default connect(mapStateToProps, mapDispatchToPropos)(MapContainer);
