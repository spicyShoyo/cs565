import React from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene, Drawer } from 'react-native-router-flux';
import HomeContainer  from './components/home-container';
import MapContainer from './components/map-container';
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
      {/* <Scene key='start' component={ MapContainer } hideNavBar={ 1 }/> */}
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
