import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

export default class ToolbarPresenter extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <View style={{width: '30%'}}>
            {
              this.props.onBack ?
              <TouchableOpacity onPress={ () => this.props.onBack && this.props.onBack() }>
                <Image
                  source={require('../../images/chevron_left.png')}
                  style={{height: 40, width: 40}}
                />
              </TouchableOpacity> : null
            }
          </View>
          <View style={{width: '40%', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...styles.headerFontStyle, color: '#ee4e22'}}>{ this.props.titleLeft }</Text>
              <Text style={styles.headerFontStyle}>{ this.props.titleRight }</Text>
            </View>
          </View>
          <View style={{width: '30%'}}>
          </View>
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
