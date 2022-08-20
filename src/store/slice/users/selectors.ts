import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../../store";

export const getUsersSlice = (state: TState) => state;

export const getUsersSelector = createSelector(
  getUsersSlice,
  (slice) => slice.users
);

export const getUserToken = createSelector(
  getUsersSlice,
  (slice) => slice.users.token
);
