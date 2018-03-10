import * as Storager from '../helpers/storager';

export const LOADEVENTS = 'LOADEVENTS';
export const LOADINGEVENTS = 'LOADINGEVENTS';
export const LOADEDEVENTS = 'LOADEDEVENTS';

export function loadingEvents() {
  return {
    type: LOADINGEVENTS,
  }
}

export function loadedEvents(events) {
  return {
    type: LOADEDEVENTS,
    events: events
  }
}

export function loadEvents() {
  return function (dispatch) {
    dispatch(loadingEvents());
    return Storager.getAll().then(events => dispatch(loadedEvents(events)))
  }
}