import { $api } from "../../../shared/api";

type TFormValues = {
  email: string;
  password: string;
}

export const userAuthService = {
  getAuthUser: async (email: string, password?: string) =>
    $api.post<TFormValues>("/api/auth/login", { email, password }),
};
