import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUserData = {
  id: number;
  name: string;
  logo?: string;
  description?: string;
};

export type TUsersState = {
  users: TUserData[] | null;
  status: RequestStatuses;
  error: Error | null;
};
