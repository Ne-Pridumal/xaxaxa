import { ResponseMeta, basicApi } from './basic';

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

async function getQuizzesByUser(id?:number) : Promise<TGetQuizzesResponse | undefined>{
  if(!id) return
  return (await basicApi.get('/quizzesp')).data
}

export const quizzesApi = {
  getQuizzesByUser
}