import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { openNotificationWithIcon } from "../../../shared/helpers/notification";
import { userService } from "./services";

export const getUsersAsync = createAsyncThunk(
  "user/getUsersAsync",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUsers();
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка получения пользователей",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);

export const getUsersSearchAsync = createAsyncThunk(
  "user/getUsersSearchAsync",
  async (query: string, { rejectWithValue }) => {
    try {
      if (query) {
        const { data } = await userService.getSearchUsers(query);
        return data;
      } else {
        const { data } = await userService.getUsers();
        return data;
      }
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка поиска",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);
