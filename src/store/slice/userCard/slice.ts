import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatuses } from "../../../shared/helpers/enums";
import { editUserInfoAsync, getUserInfoAsync } from "./asyncActions";
import { TUserCard, TUserCardInner } from "./entities";

export const initialState = {
  user: null,
  status: RequestStatuses.IDLE,
  error: null,
} as TUserCard;

const userCardSlice = createSlice({
  name: "userCardSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfoAsync.pending.type]: (state: TUserCard) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getUserInfoAsync.fulfilled.type]: (
      state: TUserCard,
      { payload }: PayloadAction<TUserCardInner>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      user: payload,
    }),
    [getUserInfoAsync.rejected.type]: (
      state: TUserCard,
      { payload: error }: PayloadAction<Error>
    ) => ({
      user: null,
      status: RequestStatuses.FAILURE,
      error,
    }),

    [editUserInfoAsync.pending.type]: (state: TUserCard) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [editUserInfoAsync.fulfilled.type]: (
      state: TUserCard,
      { payload }: PayloadAction<TUserCardInner>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      user: payload,
    }),
    [editUserInfoAsync.rejected.type]: (
      state: TUserCard,
      { payload: error }: PayloadAction<Error>
    ) => ({
      user: null,
      status: RequestStatuses.FAILURE,
      error,
    }),
  },
});

export const userCardReducer = userCardSlice.reducer;
