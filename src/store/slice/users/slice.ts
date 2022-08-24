import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { getUsersAsync, getUsersSearchAsync } from "./asyncActions";
import { TUsersState } from "./entities";

const initialState = {
  users: [],
  status: RequestStatuses.IDLE,
  error: null,
} as TUsersState;

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending.type]: (state: any) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getUsersAsync.fulfilled.type]: (
      state: any,
      { payload }: PayloadAction<any>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      users: payload,
    }),
    [getUsersAsync.rejected.type]: (
      state: any,
      { payload: error }: PayloadAction<any>
    ) => ({
      users: null,
      status: RequestStatuses.FAILURE,
      error,
    }),

    [getUsersSearchAsync.pending.type]: (state: any) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getUsersSearchAsync.fulfilled.type]: (
      state: any,
      { payload }: PayloadAction<any>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      users: payload,
    }),
    [getUsersSearchAsync.rejected.type]: (
      state: any,
      { payload: error }: PayloadAction<any>
    ) => ({
      users: null,
      status: RequestStatuses.FAILURE,
      error,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
