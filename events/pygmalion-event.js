import BaseEvent from './base-event'

export default class PygmalionEvent extends BaseEvent{
  constructor(entrySurveyObj) {
    super(entrySurveyObj)
    this.info = {
      distance: this.getDistance(entrySurveyObj),
      entryScore: this.getEntryScore(entrySurveyObj),
      title: "Music Festival!",
      titleLeft: "Music",
      titleRight: "Festival!",
      duration: "2h+",
      longitude: -88.222515,
      latitude: 40.108024,
      where: "Krannert Center",
      what: ["Enjoy the music"],
    }
  }

  getDistance = (entrySurveyObj) => {
    return "5min walk"
  }
}

