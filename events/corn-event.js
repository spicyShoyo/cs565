import BaseEvent from './base-event'

export default class CornEvent extends BaseEvent{
  constructor(entrySurveyObj) {
    super(entrySurveyObj)
    this.info = {
      distance: this.getDistance(entrySurveyObj),
      entryScore: this.getEntryScore(entrySurveyObj),
      title: "Corn!",
      titleLeft: "Co",
      titleRight: "rn!",
      duration: "2h",
      longitude: -88.208954,
      latitude: 40.112383,
      where: "Downtown Urbana",
      what: ["Eat corn dogs", "Enjoy live music"],
    }
  }

  getDistance = (entrySurveyObj) => {
    return "10min walk"
  }
}

