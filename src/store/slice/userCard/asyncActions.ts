import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { getUsersAsync } from "../users/asyncActions";
import { TUserCard, TUserInfo } from "./entities";
import { userCardService } from "./services";

export const getUserInfoAsync = createAsyncThunk(
  "user/getUserInfoAsync",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await userCardService.getUserInfo(id);
      return data[0];
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  }
);

export const editUserInfoAsync = createAsyncThunk(
  "user/editUserInfoAsync",
  async ({ userId, editedUserInfo }: any, { rejectWithValue, getState, dispatch }) => {
    try {
      const { userCard } = getState() as {
        userCard: TUserCard;
      };
      const newUserInfo = {
        ...userCard.user,
        ...editedUserInfo
      }
      const { data } = await userCardService.editUserInfo(userId, newUserInfo);
      dispatch(getUsersAsync())
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
  "user/deleteUserAsync",
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await userCardService.deleteUser(userId);
      dispatch(getUsersAsync())
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  }
);

export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (userInfo: TUserInfo, { rejectWithValue, dispatch }) => {
    try {
      const logo = `https://avatars.dicebear.com/api/avataaars/${userInfo.name}.svg`
      const newUserInfo = {...userInfo, logo}
      const { data } = await userCardService.addUser(newUserInfo);
      dispatch(getUsersAsync())
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  }
);
