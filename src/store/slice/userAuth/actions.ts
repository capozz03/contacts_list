
import { clientCookies } from "../../../shared/helpers/cookies";
import { TUserAuthState } from "./entities";

export const userSliceActions = {
  logoutUser(state: TUserAuthState) {
    clientCookies.deleteToken();
    clientCookies.deleteUserId();
    return { ...state, token: null, userInfo: null };
  },
};
