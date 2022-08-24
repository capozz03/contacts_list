import { createSelector } from "@reduxjs/toolkit";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { TState } from "../../store";

export const getUsersSlice = (state: TState) => state;

export const getUsersSelector = createSelector(
  getUsersSlice,
  (slice) => slice.users.users
);

export const getUsersLoadingStatusSelector = createSelector(
  getUsersSlice,
  (slice) => slice.users.status === RequestStatuses.LOADING
);