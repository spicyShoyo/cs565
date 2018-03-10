export const OFFSTAGE = 'OFFSTAGE';
export const ROUTESTAGE = 'ROUTESTAGE';
export const MAINSTAGE = 'MAINSTAGE';

export function routeStage(eventObj) {
  return {
    type: ROUTESTAGE,
    eventObj: eventObj
  }
}

export function mainStage() {
  return {
    type: MAINSTAGE,
  }
}