import BaseEvent from './base-event'

export default class SquirrelsEvent extends BaseEvent{
  constructor(entrySurveyObj) {
    super(entrySurveyObj)
    this.info = {
      distance: this.getDistance(entrySurveyObj),
      entryScore: this.getEntryScore(entrySurveyObj),
      title: "Squirrels!",
      titleLeft: "Squ",
      titleRight: "irrels!",
      duration: "1h",
      longitude: -88.2434,
      latitude: 40.1164,
      where: "Crystal Lake",
      what: ["Count the Squirrels", "Take a selfie with the lake"],
    }
  }

  getDistance = (entrySurveyObj) => {
    return "20min walk"
  }
}

