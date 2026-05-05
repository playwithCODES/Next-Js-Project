import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./theme/userPreferenceSlice";
import authReducer from "./auth/authSlice"
const rootReducer = combineReducers({

    auth:authReducer,
  counter: CounterReducer,
  userPreference: userPreferenceReducer,
});

export default rootReducer;
