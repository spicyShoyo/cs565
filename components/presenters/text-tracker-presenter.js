import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class TextTrackerPresenter extends React.Component {
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
      <View style={{marginTop: 50}}>
        <View style={{marginRight: 100}}>
          <Text style={{...styles.text, fontSize: 30}}>{this.props.title} </Text>
        </View>
        {/* <View style={{alignItems: 'center'}}>
          <Text style={{...styles.text, color: '#ee4e22', fontSize: 75}}>Alex</Text>
        </View> */}
        <TextInput multiline={true} autoFocus={true} style={{...styles.text, color: '#ee4e22', fontSize: 75}}/>


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
    color: '#092e4c',
    fontSize: 25,
  },
};
