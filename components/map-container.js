import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import MapView from 'react-native-maps';

// import { Slider, Button } from 'nachos-ui'

class MapContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <View style={{width: '30%'}}>
          </View>
          <View style={{width: '40%', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...styles.headerFontStyle, color: '#ee4e22'}}>M</Text>
              <Text style={styles.headerFontStyle}>ap</Text>
            </View>
          </View>
          <View style={{width: '30%'}}>
          </View>
        </View>
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
        <View style={styles.footer}>
          <Text style={{fontFamily: 'Avenir-Black', color: 'white'}}>© Group15 SP18 CS565</Text>
        </View>
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
  header: {
    backgroundColor: '#092e4c',
    paddingTop: 15,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5
  },
  headerFontStyle: {
    fontFamily: 'Avenir-Black',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
  footer: {
    height: 25,
    backgroundColor: '#29a4dd',
    alignItems: 'center',
    justifyContent: 'center'
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
