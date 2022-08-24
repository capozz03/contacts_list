import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUserCardInner = {
  id: number;
  name: string;
  logo?: string;
  description?: string;
}

export type TUserCard = {
  user: TUserCardInner | null;
  status: RequestStatuses;
  error: Error | null;
};

export type TUserInfo = {
  name: string;
  description?: string;
}

