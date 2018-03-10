import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ToolbarPresenter from './presenters/toolbar-presenter';
import FooterPresenter from './presenters/footer-presenter';

class ReviewContainer extends React.Component {
  onBack = () => {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarPresenter titleLeft="Re" titleRight="view" onBack={ this.onBack }/>
        <View style={styles.body}>

          <Text>Review</Text>
          <Text>{ this.props.events.length }</Text>
          <Text> { this.props.loading.toString() }</Text>

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
    alignItems: 'center'
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
