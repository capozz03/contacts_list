import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUser = {
  user_id: string;
  name: string;
  logo?: string;
  permissions?: any[];
};

export type TUserState = {
  userInfo: TUser | null;
  userId: string | null;
  token: string | null;
  status: RequestStatuses;
  error: Error | null;
};
