import { createSlice } from "@reduxjs/toolkit";
import { clientCookies } from "../../../shared/helpers/cookies";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { TUser, TUserState } from "./entities";

const initialState = {
  userId: clientCookies.getUserId() || null,
  token: clientCookies.getToken() || null,
  status: RequestStatuses.IDLE,
  error: null,
} as TUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
