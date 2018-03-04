import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
} from 'react-native';

import ToolbarPresenter from './toolbar-presenter';
import FooterPresenter from './footer-presenter';

class TodayContainer extends React.Component {
  onSubmit = () => {
    Actions.activitiesContainer();
  }

  onBack = () => {
    Actions.pop();
  }

  renderSubtitle = (str) => {
    return (
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Text style={ styles.subSubTitleText }> {str} </Text>
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
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="To" titleRight="day" onBack={ this.onBack }/>
        <View style={styles.body}>

          <View style={styles.cardContainer}>
            <Text style={ {...styles.subSubTitleText, fontSize:30} }> {"Qucik Questions..."} </Text>
            { this.renderDivider('90%') }

            { this.renderSubtitle("How do you feel?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            { this.renderSubtitle("Wanna meet people?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            { this.renderSubtitle("How much time?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            { this.renderSubtitle("More time outside?") }
            <Slider minimumValue={1} maximumValue={100} step={1} value={50} width={'70%'}/>
            { this.renderDivider() }

            <TouchableOpacity style={ styles.submitButton } onPress={ this.onSubmit } >
              <Text style={ styles.submitText }>Submit!</Text>
            </TouchableOpacity>
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
  submitButton: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    paddingTop: 3,
    backgroundColor: '#fa4900',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
  subSubTitleText: {
    fontFamily: 'Avenir-Black',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
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

export default connect(mapStateToProps, mapDispatchToPropos)(TodayContainer);
