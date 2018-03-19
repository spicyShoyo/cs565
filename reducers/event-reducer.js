import { OFFSTAGE, ROUTESTAGE, MAINSTAGE, EXITSTAGE, SUBMITEVENT } from '../actions/event-action';
import * as Storager from '../helpers/storager';

const defaultState = {
  stage: OFFSTAGE,
  eventObj: null,
}

const routeStage = (state, eventObj) => {
  return {
    ...state,
    stage: ROUTESTAGE,
    eventObj: eventObj
  }
}

const mainStage = (state, eventObj) => {
  return {
    ...state,
    stage: MAINSTAGE,
    eventObj: eventObj
  }
}

const exitStage = (state, eventObj) => {
  return {
    ...state,
    stage: EXITSTAGE,
    eventObj: eventObj
  }
}

const submitEvent = (state, eventObj) => {
  eventObj.info.date = Date();
  // Storager.store(eventObj);
  return {
    ...state,
    stage: OFFSTAGE,
    eventObj: eventObj
  }
}

export default function (state, action) {
  switch (action.type) {
    case ROUTESTAGE:
      return routeStage(state, action.eventObj);
    case MAINSTAGE:
      return mainStage(state, action.eventObj);
    case EXITSTAGE:
      return exitStage(state, action.eventObj);
    case SUBMITEVENT:
      return submitEvent(state, action.eventObj);
    default:
      return defaultState;
  }
}