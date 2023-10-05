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

async function getQuizzes() : Promise<TGetQuizzesResponse>{
  return (await basicApi.get('/quizzesp')).data
}

export const quizzesApi = {
  getQuizzes
}