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

class MapContainer extends React.Component {
  onBack = () => {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="M" titleRight="ap" onBack={ this.onBack }/>
        <View style={styles.body}>

          <MapView
            initialRegion={{
              longitude: -88.2434,
              latitude: 40.1164,
              latitudeDelta: 9.22,
              longitudeDelta: 4.21,
            }}
            minZoomLevel={15}
            style={StyleSheet.absoluteFillObject}
          >
            <MapView.Marker
              renderMarker={() => {}}
              key={1}
              coordinate={{longitude: -88.2434, latitude: 40.1164}}
            >
              <MapView.Callout>
                <Text>Callout</Text>
              </MapView.Callout>
            </MapView.Marker>
          </MapView>

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
