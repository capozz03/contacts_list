import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUsersStateData = {
  user_id: number;
  name: string;
  logo?: string;
  description?: string;
};

export type TUsersState = {
  users: TUsersStateData[] | null;
  status: RequestStatuses;
  error: Error | null;
};
