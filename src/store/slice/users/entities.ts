import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUsersStateData = {
  user_id: string;
  name: string;
  logo: string;
};

export type TUser = {
  user_id: string;
  name: string;
  logo?: string;
  permissions?: any[];
};

export type TUsersState = {
  users: TUsersStateData[] | null;
  token: string | null;
  status: RequestStatuses;
  error: Error | null;
};
