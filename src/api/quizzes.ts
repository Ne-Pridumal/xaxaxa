import { Quiz } from '@/types';
import { basicApi } from './basic';
import qs from 'qs';

async function getQuizzesByGroup({id, access_token}:{id?:number, access_token?:string}) : Promise<Quiz[] | undefined>{
  if(id && access_token) {
    const searchParam = qs.stringify({populate:'*', filters:{ id:{ $eq:id } }})
    const {data} = (await basicApi.get(`/groups?${searchParam}`, {headers:{
      Authorization:`Bearer ${access_token}`
    }}))
    return data.data?.at(0)?.attributes.quizzes.data
  }
}

async function getQuizById({id, access_token}:{ id?:number, access_token?:string }) : Promise<Quiz | undefined>{
  if(id && access_token){
    const searchParam = qs.stringify({ populate:'*', filters:{ id : { $eq : id} } })
    const { data } = (await basicApi.get(`/quizzesp?${searchParam}`, {headers: {Authorization : `Bearer ${access_token}`}}))
    return data.data?.at(0)?.attributes+++
  }
}


export const quizzesApi = {
  getQuizzesByGroup
}