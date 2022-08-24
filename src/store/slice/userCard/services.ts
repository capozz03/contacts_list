import { $api } from "../../../shared/api";
import { TUserInfo } from "./entities";

export const userCardService = {
  getUserInfo: async (id: number) => $api.get<any>(`/users?id=${id}`),
  editUserInfo: async (id: number, newUserInfo: TUserInfo) =>
    $api.put<any>(`/users/${id}`, newUserInfo),
  deleteUser: async (id: number) => $api.delete<any>(`/users/${id}`),
  addUser: async (userInfo: TUserInfo) => $api.post<TUserInfo>('/users', userInfo),
};
