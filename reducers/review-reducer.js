import { LOADEDEVENTS, LOADINGEVENTS } from '../actions/review-action';

const defaultState = {
  events: [],
  loading: false,
}

const loadingEvents = (state) => {
  return {
    ...state,
    loadingEvents: true
  }
}

const loadedEvents = (state, events) => {
  return {
    ...state,
    loadingEvents: false,
    events: events
  }
}

export default function(state, action) {
  switch (action.type) {
  case LOADINGEVENTS:
    return loadingEvents(state);
  case LOADEDEVENTS:
    return loadedEvents(state, action.events);
  default:
    return defaultState;
  }
}
