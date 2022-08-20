import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/users/slice";

const rootReducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TState = ReturnType<typeof store.getState>;
