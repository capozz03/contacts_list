import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../../store";

export const getUserAuthSlice = (state: TState) => state.userAuth;

export const getUserToken = createSelector(
  getUserAuthSlice,
  (slice) => slice.token
);
