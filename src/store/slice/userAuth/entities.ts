import { RequestStatuses } from "../../../shared/helpers/enums";

export type TUserAuthState = {
  token: string | null;
  status: RequestStatuses;
  error: Error | null;
};

export type TPayloadToken = {
  access_token: string;
}
