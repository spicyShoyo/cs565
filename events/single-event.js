import BaseEvent from './base-event'

export default class SingleEvent extends BaseEvent{
  constructor(entrySurveyObj) {
    super(entrySurveyObj)
    this.info = {
      distance: this.getDistance(entrySurveyObj),
      entryScore: this.getEntryScore(entrySurveyObj),
      title: "Single's Night!",
      titleLeft: "Single's",
      titleRight: "Night!",
      duration: "2h",
      longitude: -88.243714,
      latitude: 40.119937,
      where: "Bentley’s Pub",
      what: ["Order a martini", "Make a friend"],
      exitQuestion: "🍸🍸 Enjoy the drink?",
      trackers: [
        {
          type: "BINARY",
          title: "Martini Ordered",
        },

        {
          type: "TEXT",
          title: "I talked to:",
        }
      ],
    }
  }

  getDistance = (entrySurveyObj) => {
    return "5min walk"
  }
}

