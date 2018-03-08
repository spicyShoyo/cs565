import { LOADINGACTIVITIES, LOADEDACTIVITIES } from '../actions/activity-action';

const defaultState = {
  entrySurveyObj: {
    mood: 50, // how do you feel
    social: 50, // wanna meet people
    free: 50, // how much time
    outside: 50 // more time outside
  },
  loadingActivities: false
}

const loadingActivities = (state, entrySurveyObj) => {
  return {
    ...state,
    entrySurveyObj: entrySurveyObj,
    loadingActivities: true
  }
}

const loadedActivities = (state) => {
  return {
    ...state,
    loadingActivities: false
  }
}

export default function (state, action) {
  switch (action.type) {
    case LOADINGACTIVITIES:
      return loadingActivities(state, action.entrySurveyObj);
    case LOADEDACTIVITIES:
      return loadedActivities(state);
    default:
      return defaultState
  }
}
