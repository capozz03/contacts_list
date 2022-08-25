import { AnyAction, combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { userAuthReducer } from "./slice/userAuth/slice";
import { userCardReducer } from "./slice/userCard/slice";
import { usersReducer } from "./slice/users/slice";

const rootReducer = combineReducers({
  users: usersReducer,
  userAuth: userAuthReducer,
  userCard: userCardReducer,
});

export const store: AppStore = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof rootReducer>;
export type TState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
