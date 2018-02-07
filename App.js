import React from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene, Drawer } from 'react-native-router-flux';
import HomeContainer  from './components/containers/home-container';
import store from './store';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ConnectedRouter = connect()(Router);

const Scenes = Actions.create(
  <Scene key='root' hideNavBar panHandlers={null}>
    <Scene key='home' title="TestProject">
      <Scene key='start' component={ HomeContainer } hideNavBar={ 1 }/>
    </Scene>
  </Scene>
)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter scenes={ Scenes }/>
      </Provider>
    )
  }
}
