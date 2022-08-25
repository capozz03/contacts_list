import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { openNotificationWithIcon } from "../../../shared/helpers/notification";
import { getUsersAsync } from "../users/asyncActions";
import { TUserCard, TUserInfo } from "./entities";
import { userCardService } from "./services";

type TEditUserProps = {
  userId: number;
  editedUserInfo: TUserInfo;
};

type TDeleteUserProps = { userId: number; userName: string };

export const getUserInfoAsync = createAsyncThunk(
  "user/getUserInfoAsync",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await userCardService.getUserInfo(id);
      return data[0];
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка получения информации о пользователе",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);

export const editUserInfoAsync = createAsyncThunk(
  "user/editUserInfoAsync",
  async (
    { userId, editedUserInfo }: TEditUserProps,
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const { userCard } = getState() as {
        userCard: TUserCard;
      };
      const newUserInfo = {
        ...userCard.user,
        ...editedUserInfo,
      };
      const { data } = await userCardService.editUserInfo(userId, newUserInfo);
      openNotificationWithIcon(
        "Успешно",
        `Пользователь ${editedUserInfo.name} успешно отредактирован`,
        "success"
      );
      dispatch(getUsersAsync());
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка редактирования пользователя",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
  "user/deleteUserAsync",
  async (
    { userId, userName }: TDeleteUserProps,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await userCardService.deleteUser(userId);
      dispatch(getUsersAsync());
      openNotificationWithIcon(
        "Успешно",
        `Пользователь ${userName} успешно удален`,
        "success"
      );
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка удаления пользователя",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);

export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (userInfo: TUserInfo, { rejectWithValue, dispatch }) => {
    try {
      const logo = `https://avatars.dicebear.com/api/avataaars/${userInfo.name}.svg`;
      const newUserInfo = { ...userInfo, logo };
      const { data } = await userCardService.addUser(newUserInfo);
      openNotificationWithIcon(
        "Успешно",
        `Пользователь ${userInfo.name} успешно создан`,
        "success"
      );
      dispatch(getUsersAsync());
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка добавления пользователя",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);
