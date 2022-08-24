import { $api } from "../../../shared/api";

export const userService = {
  getUsers: async () => $api.get<any>("/users"),
  getSearchUsers: async (query: string) => $api.get<any>(`/users?q=${query}`),
};
