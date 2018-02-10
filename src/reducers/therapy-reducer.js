const defaultState = {
  title: "New Therapy",
  description: "",
  comment: "",
  patientID: "",
  therapistID: "",
  baselines: [],
  checkpoints: {},
  goals: [],
  startDate: "",
  endDate: "",
  checkpointFreq: 7,
  widgets: [],
}

export default function (state, action) {
  switch (action.type) {
    case "TEST":
      return defaultState
    default:
      return defaultState
  }
}
