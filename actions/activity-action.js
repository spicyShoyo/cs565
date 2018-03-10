import SquirrelsEvent from '../events/squirrels-event';

export const SUBMITENTRYSURVEY = 'SUBMITENTRYSURVEY';
export const LOADINGACTIVITIES = 'LOADINGACTIVITIES';
export const LOADEDACTIVITIES = 'LOADEDACTIVITIES';
export const STARTEVENT = 'STARTEVE';
export const ENDEVENT = 'ENDEVENT';

export function loadingActivities() {
  return {
    type: LOADINGACTIVITIES,
  }
}

export function loadedActivities() {
  return {
    type: LOADEDACTIVITIES,
    recommendedActivities: recommendedActivities,
  }
}

export function submitEntrySurvey(entrySurveyObj) {
  return function(dispatch) {
    dispatch(loadingActivities(entrySurveyObj));
    return setTimeout(() => {
      dispatch(loadedActivities(recommendedActivities))
    }, 100); // just like API, taking time
  }
}

export function startEvent(eventIdx) {
  return {
    type: STARTEVENT,
    eventIdx: eventIdx
  }
}

export function endEvent(eventIdx) {
  return {
    type: ENDEVENT
  }
}