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
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';
import ActivityCardPresenter from './activity-card-presenter';

class ActivitiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalShow: false,
        activityObj: null,
    };
  }

  onBack = () => {
    Actions.pop();
  }

  onCardPress = (activityObj) => {
    this.setState({
      modalShow: true,
      activityObj: activityObj,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Act" titleRight="ivities" onBack={ this.onBack }/>
        <View style={styles.body}>

          <View style={styles.cardContainer}>
            <ScrollView style={ { marginBottom: 50 } }>
              <ActivityCardPresenter key={0} index={0} activityObj={{title: 'Squirrels!', duration: '1h', distance: '20min walk'}} onPress={this.onCardPress}/>
                <Modal animationType="fade" transparent={true} visible={this.state.modalShow}>
                  <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => { this.setState({ modalShow: false }); }} style={{ height: 200 }}/>
                    <View style={styles.modalContainer}>
                      <MapView
                        initialRegion={{
                          longitude: -88.2434,
                          latitude: 40.1164,
                          latitudeDelta: 9.22,
                          longitudeDelta: 4.21,
                        }}
                        minZoomLevel={15}
                        style={{
                          ...StyleSheet.absoluteFillObject,
                          height:'40%',
                        }}
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
                      <View style={{marginTop: '40%', width: '100%', flex: 1}}>
                        <View style={ chipStyles.body }>
                          <Text style={ chipStyles.titleText}>Where</Text>
                          <Text style={ chipStyles.statusText}>Crystal Lake</Text>
                          <Text style={ chipStyles.titleText}>What</Text>
                          <Text style={ chipStyles.statusText}>Count the Squirrels</Text>
                          <Text style={ chipStyles.statusText}>Take a selfie with the lake</Text>
                        </View>
                        <TouchableOpacity style={ styles.submitButton } onPress={ this.onSubmit } >
                          <Text style={ styles.submitText }>Start!</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
            </ScrollView>
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
};


function mapStateToProps(state) {
  return {

  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(ActivitiesContainer);
