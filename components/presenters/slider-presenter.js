import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';

export default class SliderPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 50,
      textSize: 20,
      text: 'Y',
      textColor: '#ee4e22',
      numerical: 75,
    }
  }

  sliding = (newVal) => {
    let newNumerical = Math.ceil(45 + 0.75 * newVal);
    let plusSign = '';
    if (newVal === 100) {
      plusSign = '+';
    } else if (newNumerical === 46) {
      newNumerical = 45; // hacky fix
    }
    this.setState({
      sliderValue: newVal,
      textSize: 20 + 1.75 * newVal / 10,
      text: newVal > 50 ? 'Y' : 'N',
      textColor: newVal > 50 ? '#ee4e22' : '#092e4c',
      numerical: newNumerical.toString() + plusSign
    });
  }

  renderSubtitle = (str) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ styles.subSubTitleText }> {str} </Text>
        <Text style={{color: this.state.textColor, fontWeight: 'bold', fontFamily: 'Avenir-Black', fontSize: this.state.textSize}}>{this.state.text}</Text>
        <Text style={{fontWeight: 'bold', fontFamily: 'Avenir-Black', fontSize: 37.5}}> </Text>
      </View>
    )
  }

  renderSubtitleNumerical = (str) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ styles.subSubTitleText }> {str} </Text>
        <Text style={{color: this.state.textColor, fontWeight: 'bold', fontFamily: 'Avenir-Black', fontSize: this.state.textSize}}>{this.state.numerical}</Text>
        <Text style={{fontWeight: 'bold', fontFamily: 'Avenir-Black', fontSize: 25}}> min</Text>
        <Text style={{fontWeight: 'bold', fontFamily: 'Avenir-Black', fontSize: 37.5}}> </Text>
      </View>
    )
  }

  renderDivider = (width='75%') => {
    return (
      <View style={ { marginTop: 10, marginBottom: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 2, width:width } } />
    )
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        { this.props.numerical? this.renderSubtitleNumerical(this.props.title) : this.renderSubtitle(this.props.title) }
        <Slider minimumValue={1} maximumValue={100} step={1} value={this.state.sliderValue} onValueChange={this.sliding} width={'70%'}/>
        { this.renderDivider() }
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
  subSubTitleText: {
    fontFamily: 'Avenir-Black',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
};
