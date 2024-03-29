import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class PhotoTrackerPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    }
  }

  onPress = () => {
    this.setState({ done: true });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        { this.state.done ?
          <View style={styles.footer}>
            <Text style={styles.text}>Fake Photo</Text>
          </View>
          :
          <View style={styles.footer}>
            <Text style={styles.text}>➕ {this.props.title}</Text>
          </View>
        }

      </TouchableOpacity>
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
  footer: {
    height: 300,
    width: 300,
    backgroundColor: '#29a4dd',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
};
