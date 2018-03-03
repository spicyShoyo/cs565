import React from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene, Drawer } from 'react-native-router-flux';
import store from './store';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeContainer  from './components/home-container';
import ReviewContainer from './components/review-container';
import TodayContainer from './components/today-container';
import MapContainer from './components/map-container';

const ConnectedRouter = connect()(Router);

const Scenes = Actions.create(
  <Scene key='root' hideNavBar panHandlers={null}>
    <Scene key='homeScene' title="Outthere">
      <Scene key='homeContainer' component={ HomeContainer } hideNavBar={ 1 }/>
    </Scene>
    <Scene key='reviewScene' title="Review">
      <Scene key='reviewContainer' component={ ReviewContainer } hideNavBar={ 1 }/>
    </Scene>
    <Scene key='todayScene' title="Today">
      <Scene key='todayContainer' component={ TodayContainer } hideNavBar={ 1 }/>
    </Scene>
    <Scene key='mapScene' title="Map">
      <Scene key='mapContainer' component={ MapContainer } hideNavBar={ 1 }/>
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
