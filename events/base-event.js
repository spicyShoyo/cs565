export default class BaseEvent {
  constructor(entrySurveyObj) {
    this.info = {
      distance: this.getDistance(entrySurveyObj), // String
      entryScore: this.getEntryScore(entrySurveyObj), // Int [0, 10]
      title: "Squirrels!", // String
      titleLeft: "Squ", // String
      titleRight: "irrels!", // String
      duration: "1h", // String
      longitude: -88.2434, // Float
      latitude: 40.1164, // Float
      where: "Crystal Lake", // Float
      what: ["Count the Squirrels", "Take a selfie with the lake"], // Array[String]
    }
  }

  getDistance = (entrySurveyObj) => {
    return "10min walk"
  }

  getEntryScore = (entrySurveyObj) => {
    return 10
  }
}

