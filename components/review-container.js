import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';

class ReviewContainer extends React.Component {
  onBack = () => {
    Actions.pop();
  }

  renderDivider = (width='75%') => {
    return (
      <View style={ { marginTop: 10, marginBottom: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 2, width:width } } />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Ev" titleRight="ent" onBack={ this.onBack }/>
        <View style={styles.body}>
        <View style={styles.cardContainer}>
          { this.renderDivider() }
          { this.renderDivider() }
          <TouchableOpacity style={ styles.submitButtonBlue } onPress={ this.exitStage } >
            <Text style={ styles.submitText }>End!</Text>
          </TouchableOpacity>
          </View>
        </View>
        <FooterPresenter/>
      </View>
    )
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <ToolbarPresenter titleLeft="Re" titleRight="view" onBack={ this.onBack }/>
  //       <View style={styles.body}>
  //
  //         <Text>Review</Text>
  //         <Text>{ this.props.events.length }</Text>
  //         <Text> { this.props.loading.toString() }</Text>
  //
  //       </View>
  //       <FooterPresenter/>
  //     </View>
  //   )
  // }
}

const styles = {
  container: {
    flex: 1,
  },
  // body: {
  //   flex: 1,
  //   alignItems: 'center'
  // },
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
  submitButtonBlue: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 45,
    paddingTop: 3,
    backgroundColor: '#092e4c',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitText: {
    fontFamily: 'Avenir-Black',
    color: 'white',
    fontSize: 25,
  },
};

function mapStateToProps(state) {
  return {
    events: state.ReviewReducer.events,
    loading: state.ReviewReducer.loading,
  };
}


function mapDispatchToPropos(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToPropos)(ReviewContainer);
