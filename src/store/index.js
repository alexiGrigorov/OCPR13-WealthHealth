import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";
import { loadState, saveState } from "./localStorage";

// 1. Hydrate from localStorage (if present)
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState,
});

// 2. Persist on changes
store.subscribe(() => {
  saveState(store.getState());
});
