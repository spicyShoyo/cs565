import { combineReducers } from 'redux';

import TestReducer from './test-reducer';
import TherapyReducer from './therapy-reducer';

export default combineReducers({
  TestReducer,
  TherapyReducer,
});
