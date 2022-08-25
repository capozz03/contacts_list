import { $api } from "../../../shared/api";
import { TUserData } from "./entities";

export const userService = {
  getUsers: async () => $api.get<TUserData[]>("/users"),
  getSearchUsers: async (query: string) => $api.get<TUserData[]>(`/users?q=${query}`),
};
