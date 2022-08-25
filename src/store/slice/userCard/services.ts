import { $api } from "../../../shared/api";
import { TUserCardInner, TUserInfo } from "./entities";

export const userCardService = {
  getUserInfo: async (id: number) => $api.get<TUserCardInner[]>(`/users?id=${id}`),
  editUserInfo: async (id: number, newUserInfo: TUserInfo) =>
    $api.put<TUserCardInner>(`/users/${id}`, newUserInfo),
  deleteUser: async (id: number) => $api.delete<TUserCardInner>(`/users/${id}`),
  addUser: async (userInfo: TUserInfo) => $api.post<TUserInfo>('/users', userInfo),
};
