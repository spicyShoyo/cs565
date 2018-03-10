import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class ActivityCardPresenter extends React.Component {
  pressed = () => {
    this.props.onPress(this.props.index, this.props.activityInfo);
  }

  render() {
    return (
      <View style={ styles.body }>
        <Text style={ styles.titleText}>{ this.props.activityInfo.title }</Text>
        <Text style={ styles.statusText}>Duration: { this.props.activityInfo.duration }</Text>
        <Text style={ styles.statusText}>Distance: { this.props.activityInfo.distance }</Text>
        <TouchableOpacity style={ styles.submitButton } onPress={ this.pressed }>
          <Text style={ styles.buttonText }>Details ></Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  body: {
    width: 325,
    height: 120,
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
