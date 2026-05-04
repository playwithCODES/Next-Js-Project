import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./theme/userPreferenceSlice";
const rootReducer = combineReducers({
  counter: CounterReducer,
  userPreference: userPreferenceReducer,
});

export default rootReducer;
