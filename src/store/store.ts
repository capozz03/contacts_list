import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./slice/userAuth/slice";
import { userCardReducer } from "./slice/userCard/slice";
import { usersReducer } from "./slice/users/slice";

const rootReducer = combineReducers({
  users: usersReducer,
  userAuth: userAuthReducer,
  userCard: userCardReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TState = ReturnType<typeof store.getState>;
