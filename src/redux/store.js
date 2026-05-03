"use client";
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./theme/userPreferenceSlice";
const store = configureStore({
  reducer: {
    counter: CounterReducer,
    userPreference: userPreferenceReducer,
  },
});

export { store };
