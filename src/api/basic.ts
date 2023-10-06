import { apiUrl } from '@/constants';
import axios from 'axios';

export type ResponseMeta = {
  pagination:{
    page:number;
    pageSize:number;
    pageCount:number;
    total:number;
  };
}

export const basicApi = axios.create({ baseURL:apiUrl, withCredentials:false })