import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { openNotificationWithIcon } from "../../../shared/helpers/notification";
import { userAuthService } from "./services";
type TFormValues = {
  email: string;
  password: string;
};

export const userAuthAsync = createAsyncThunk(
  "user/userAuthAsync",
  async ({ email, password }: TFormValues, { rejectWithValue }) => {
    try {
      const { data } = await userAuthService.getAuthUser(email, password);
      openNotificationWithIcon(
        "Вход выполнен",
        "Вы успешно авторизовались в системе",
        "success"
      );
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      openNotificationWithIcon(
        "Ошибка авторизации",
        `${serializedError.message}`,
        "error"
      );
      return rejectWithValue(serializedError);
    }
  }
);
