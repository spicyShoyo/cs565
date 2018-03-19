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
      exitQuestion: "exitQuestion title",
      trackers: [],
      steps: 2000,
      outside: "60 min",
    }
  }

  getDistance = (entrySurveyObj) => {
    return "10min walk"
  }

  getEntryScore = (entrySurveyObj) => {
    return 10
  }
}

// Tracker types:
// binary,
// counter,
// photo,
// text

let binaryTracker = {
  type: "BINARY",
  title: "binary tracker",
}

let counterTracker = {
  type: "COUNTER",
  emoji: "🍸",
  title: "counter tracker",
}

let photoTracker = {
  type: "PHOTO",
  title: "photo tracker",
}

let textTracker = {
  type: "TEXT",
  title: "You talked to:",
}
