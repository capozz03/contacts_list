import { $api } from "../../../shared/api";

type TFormValues = {
  email: string;
  password: string;
}

export const userService = {
  getUsers: async () => $api.get<any>("/users"),
  getAuthUser: async (email: string, password?: string) =>
    $api.post<TFormValues>("/api/auth/login", { email, password }),
};
