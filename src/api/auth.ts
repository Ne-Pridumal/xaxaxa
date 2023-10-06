import { Answer, Group, User } from "@/types";
import { basicApi } from "./basic";

type TAuthenticateUserOptions = {
  identifier: string;
  password: string;
};

type TAuthenticateUserResponse = {
  jwt: string;
  user: User;
};

async function authenticateUser(
  authData: TAuthenticateUserOptions
): Promise<TAuthenticateUserResponse> {
  return (await basicApi.post("/auth/local", authData)).data;
}

type TRegisterUserOptions = {
  username: string;
  email: string;
  password: string;
};

async function registerUser(
  userData: TRegisterUserOptions
): Promise<TAuthenticateUserResponse> {
  return (await basicApi.post("/auth/local/register", userData)).data;
}

type TGetCurrentUserOptions = {
  access_token?: string;
};

async function getCurrentUser({
  access_token,
}: TGetCurrentUserOptions): Promise<User & { group: Group; answer: Answer }> {
  const { data } = await basicApi.get("/users/me?populate=*", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
}

export const authApi = {
  authenticateUser,
  registerUser,
  getCurrentUser,
};
