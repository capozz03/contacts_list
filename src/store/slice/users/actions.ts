
import { clientCookies } from "../../../shared/helpers/cookies";
import { TUsersState } from "./entities";

export const userSliceActions = {
  logoutUser(state: TUsersState) {
    clientCookies.deleteToken();
    clientCookies.deleteUserId();
    return { ...state, token: null, userInfo: null };
  },
};
