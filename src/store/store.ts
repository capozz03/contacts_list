import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/users/slice";

const rootReducer = combineReducers({
  userReducer
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];