import { authApi } from '@/api';

export function createCheckAuthQuery(access_token:string) {
  return async () => {
    if(access_token) return await authApi.getCurrentUser({ access_token });
    return null;
  }
}