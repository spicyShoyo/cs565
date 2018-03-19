import BaseEvent from './base-event'

const BINARY = "BINARY";
const COUNTER = "COUNTER";
const PHOTO = "PHOTO";
const TEXT = "TEXT";

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
      exitQuestion: "🌽🌽 Like the corn dogs?",
      trackers: [
        {
          type: COUNTER,
          emoji: "🌽",
          title: "+1 Corn Dog",
        },

        {
          type: TEXT,
          title: "Band's name:",
        }
      ],
      steps: 4537,
      outside: "79 min",
      when: "Aug 17, 2018",
    }
  }

  getDistance = (entrySurveyObj) => {
    return "10min walk"
  }
}

