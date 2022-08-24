import { initialState } from "./slice";

export const userCardSliceActions = {
  clearUserData() {
    return { ...initialState }
  },
};