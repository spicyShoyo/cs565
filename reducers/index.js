import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

import ActivityReducer from './activity-reducer';
import EventReducer from './event-reducer';
import ReviewReducer from './review-reducer';

export default combineReducers({
  ActivityReducer,
  EventReducer,
  ReviewReducer,
});
