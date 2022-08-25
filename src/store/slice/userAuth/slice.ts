import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientCookies } from "../../../shared/helpers/cookies";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { userSliceActions } from "./actions";
import { userAuthAsync } from "./asyncActions";
import { TPayloadToken, TUserAuthState } from "./entities";

const initialState = {
  token: clientCookies.getToken() || null,
  status: RequestStatuses.IDLE,
  error: null,
} as TUserAuthState;

const userAuthSlice = createSlice({
  name: "userAuthSlice",
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
      { payload }: PayloadAction<TPayloadToken>
    ) => {
      clientCookies.setToken(payload.access_token);
      return {
        ...state,
        token: payload.access_token,
        status: RequestStatuses.SUCCESS,
        error: null,
      };
    },
    [userAuthAsync.rejected.type]: (
      state,
      { payload: error }: PayloadAction<Error>
    ) => ({
      ...state,
      token: null,
      status: RequestStatuses.FAILURE,
      error,     
    }),
  },
});


export const userAuthReducer = userAuthSlice.reducer;
export const { logoutUser } = userAuthSlice.actions;
