import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit";
import { userAuthService } from "./services";

type TFormValues = {
  email: string;
  password: string;
}

export const userAuthAsync = createAsyncThunk(
  'user/userAuthAsync',
  async ({ email, password }: TFormValues, { rejectWithValue }) => {
    try {
      const { data } = await userAuthService.getAuthUser(email, password);
      console.log(data);
      return data;
    } catch (error) {
      const serializedError = miniSerializeError(error);
      return rejectWithValue(serializedError);
    }
  },
);
