import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientCookies } from "../../../shared/helpers/cookies";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { userSliceActions } from "./actions";
import { getUserInfoAsync, userAuthAsync } from "./asyncActions";
import { TUsersState } from "./entities";

const initialState = {
  users: [],
  status: RequestStatuses.IDLE,
  error: null,
  token: clientCookies.getToken() || null,
} as TUsersState;

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: userSliceActions,
  extraReducers: {
    [userAuthAsync.pending.type]: (state) => ({
      ...state,
      status: RequestStatuses.LOADING,
      error: null,
    }),
    [userAuthAsync.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>
    ) => {
      clientCookies.setToken(payload.access_token);
      return {
        ...state,
        status: RequestStatuses.SUCCESS,
        error: null,
        token: payload.access_token,
      };
    },
    [userAuthAsync.rejected.type]: (
      state,
      { payload: error }: PayloadAction<Error>
    ) => ({
      ...state,
      status: RequestStatuses.FAILURE,
      error,
      token: null,
    }),

    // [getUserInfoAsync.pending.type]: (state: any) => ({
    //   ...state,
    //   status: RequestStatuses.LOADING,
    // }),
    // [getUserInfoAsync.fulfilled.type]: (
    //   state: any,
    //   { payload: users }: PayloadAction<any>
    // ) => ({
    //   ...state,
    //   status: RequestStatuses.SUCCESS,
    //   users: users,
    // }),
    // [getUserInfoAsync.rejected.type]: (
    //   state: any,
    //   { payload: error }: PayloadAction<Error>
    // ) => ({
    //   users: null,
    //   status: RequestStatuses.FAILURE,
    //   error,
    // }),
  },
});


export const userReducer = userSlice.reducer;
export const { logoutUser } = userSlice.actions;
