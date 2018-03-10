export const OFFSTAGE = 'OFFSTAGE';
export const ROUTESTAGE = 'ROUTESTAGE';
export const MAINSTAGE = 'MAINSTAGE';
export const EXITSTAGE = 'EXITSTAGE';
export const SUBMITEVENT = 'SUBMITEVENT';

export function routeStage(eventObj) {
  return {
    type: ROUTESTAGE,
    eventObj: eventObj
  }
}

export function mainStage(eventObj) {
  return {
    type: MAINSTAGE,
    eventObj: eventObj
  }
}

export function exitStage(eventObj) {
  return {
    type: EXITSTAGE,
    eventObj: eventObj
  }
}

export function submitEvent(eventObj) {
  return {
    type: SUBMITEVENT,
    eventObj: eventObj
  }
}