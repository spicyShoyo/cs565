import React from 'react';
import connect from 'recat-redux';
import bindActionCreators from 'redux';
import Actions from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>
          asdasdsad
        </Text>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {

  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(Home);
