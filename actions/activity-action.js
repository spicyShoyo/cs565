import SquirrelsEvent from '../events/squirrels-event';
import CornEvent from '../events/corn-event';
import SingleEvent from '../events/single-event';
import MusicEvent from '../events/music-event';

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

export function loadedActivities(recommendedActivities) {
  return {
    type: LOADEDACTIVITIES,
    recommendedActivities: recommendedActivities,
  }
}

export function submitEntrySurvey(entrySurveyObj) {
  return function(dispatch) {
    dispatch(loadingActivities(entrySurveyObj));
    return setTimeout(() => {
      dispatch(loadedActivities([
        new SquirrelsEvent(entrySurveyObj),
        new CornEvent(entrySurveyObj),
        new SingleEvent(entrySurveyObj),
        new MusicEvent(entrySurveyObj),
      ]))
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