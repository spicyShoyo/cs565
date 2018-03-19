import BaseEvent from './base-event'

const BINARY = "BINARY";
const COUNTER = "COUNTER";
const PHOTO = "PHOTO";
const TEXT = "TEXT";

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
      longitude: -88.213417,
      latitude: 40.121888,
      where: "Crystal Lake",
      what: ["Count the Squirrels", "Take a selfie with the lake"],
      exitQuestion: "🐿🐿 Squirrels cute?",
      trackers: [
        {
          type: COUNTER,
          emoji: "🐿",
          title: "Squirrel!",
        },

        {
          type: PHOTO,
          title: "Selfie with the lake",
        }
      ],
      steps: 5728,
      outside: "63 min",
    }
  }

  getDistance = (entrySurveyObj) => {
    return "20min walk"
  }
}

