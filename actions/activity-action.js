export const SUBMITENTRYSURVEY = 'SUBMITENTRYSURVEY';
export const LOADINGACTIVITIES = 'LOADINGACTIVITIES';
export const LOADEDACTIVITIES = 'LOADEDACTIVITIES';

export function loadingActivities() {
  return {
    type: LOADINGACTIVITIES,
  }
}

export function loadedActivities() {
  return {
    type: LOADEDACTIVITIES,
  }
}

export function submitEntrySurvey(entrySurveyObj) {
  return function(dispatch) {
    dispatch(loadingActivities(entrySurveyObj));
    return setTimeout(() => {
      dispatch(loadedActivities())
    }, 1000); // just like API, taking time
  }
}