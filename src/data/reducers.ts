import { combineReducers } from "redux";

import ApplicationStore from "../models/ApplicationStore";

// import the reducer components
import faults from "./faults/FaultReducer";

export default combineReducers<ApplicationStore>({
  faults,
});
