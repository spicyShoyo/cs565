import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import ButtonPresenter from './button-presenter';

export default class CounterTrackerPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  onPress = () => {
    if (this.state.counter < 8) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          <Text style={{fontSize: 30}}> </Text>
          <Text style={{fontSize: 30}}>{this.props.emoji.repeat(this.state.counter)}</Text>
        </View>
        <ButtonPresenter {...styles.buttonStyle} title={this.props.title} onPress={this.onPress}/>
      </View>
    )
  }
}

const styles = {
  body: {
    marginTop: 10,
    marginBottom: 30,
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
