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

// import { Slider, Button } from 'nachos-ui'

class HomeContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <View style={{width: '30%'}}>
          </View>
          <View style={{width: '40%', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...styles.headerFontStyle, color: '#ee4e22'}}>Out</Text>
              <Text style={styles.headerFontStyle}>there</Text>
            </View>
          </View>
          <View style={{width: '30%'}}>
          </View>
        </View>
        <View style={styles.body}>
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

export default connect(mapStateToProps, mapDispatchToPropos)(HomeContainer);
