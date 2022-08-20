import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { userService } from "./services";

type TFormValues = {
  email: string;
  password: string;
}

export const getUserInfoAsync = createAsyncThunk(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUsers();
      console.log(data);
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);

export const userAuthAsync = createAsyncThunk(
  'user/getUserInfo',
  async ({ email, password }: TFormValues, { rejectWithValue }) => {
    try {
      const { data } = await userService.getAuthUser(email, password);
      console.log(data);
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);
