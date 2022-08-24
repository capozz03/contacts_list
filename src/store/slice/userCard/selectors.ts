import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../../store";

export const getUserCardSlice = (state: TState) => state.userCard;

export const getUserInfo = createSelector(
  getUserCardSlice,
  (slice) => slice.user
);
