import { OFFSTAGE, ROUTESTAGE, MAINSTAGE } from '../actions/event-action';

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

const mainStage = (state) => {
  return {
    ...state,
    stage: MAINSTAGE
  }
}

export default function (state, action) {
  switch (action.type) {
    case ROUTESTAGE:
      return routeStage(state, action.eventObj);
    case MAINSTAGE:
      return mainStage(state);
    default:
      return defaultState;
  }
}