import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import ButtonPresenter from './button-presenter';

export default class BinaryTrackerPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      checked: " ",
    }
  }

  onPress = () => {
    this.setState({ done: true, checked: " ✔" });
  }

  render() {
    return (
      <View style={styles.body}>
        <ButtonPresenter {...styles.buttonStyle} title={this.props.title + this.state.checked} onPress={this.onPress}/>
      </View>
    )
  }
}

const styles = {
  body: {
    marginTop: 20,
    marginBottom: 30
  },
  buttonStyle: {
    style: {
      width: 300,
      borderRadius: 14,
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 7,
      paddingBottom: 7,
    },
    fontStyle: {
      fontFamily: 'Avenir-Black',
      color: 'white',
      fontSize: 25,
    },
    color: "#ee4e22",
    shadowHeight: 10,
  },
};
