import { basicApi } from './basic'

type User = {
    id:number;
    username:string;
    email:string;
    provider:string;
    confirmed:boolean;
    blocked:boolean;
  }

type TAuthenticateUserOptions = {
  identifier:string;
  password:string;
}

type TAuthenticateUserResponse = {
  jwt:string;
  user:User;
}

async function authenticateUser(authData:TAuthenticateUserOptions) : Promise<TAuthenticateUserResponse> {
  return (await basicApi.post('/auth/local', authData)).data
}

type TRegisterUserOptions = {
  username: string;
  email:string;
  password:string;
}

async function registerUser(userData:TRegisterUserOptions) : Promise<TAuthenticateUserResponse> {
  return (await basicApi.post('/auth/local/register', userData)).data
}

// type TGetCurrentUserOptions = {

// }

// async function getCurrentUser(userData:TGetCurrentUserOptions) : Promise<User>{
//   return {}
// }

export const authApi = {
  authenticateUser,
  registerUser,
  // getCurrentUser
}