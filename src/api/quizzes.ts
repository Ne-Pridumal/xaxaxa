import { ResponseMeta, basicApi } from './basic';
import qs from 'qs';

type TGetQuizzesResponse = {
  meta:ResponseMeta,
  data:{
    id:number;
    attributes:{
      title:string;
      description:string;
      finishDate:string;
      publishedAt:string;
    }
  }[]
}

async function getQuizzesByGroup({id, access_token}:{id?:number, access_token:string}) : Promise<TGetQuizzesResponse | undefined>{
  if(id && access_token) {
    const searchParam = qs.stringify({populate:'*', filters:{ id:{ $eq:id } }})
    return (await basicApi.get(`/groups?${searchParam}`, {headers:{
      Authorization:`Bearer ${access_token}`
    }})).data
  }
}

export const quizzesApi = {
  getQuizzesByGroup
}