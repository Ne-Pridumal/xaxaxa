import { authApi } from ".";
import { ResponseMeta, basicApi } from "./basic";
import qs from "qs";

type TGetQuizzesResponse = {
  meta: ResponseMeta;
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      finishDate: string;
      publishedAt: string;
    };
  }[];
};

async function getQuizzesByGroup({
  access_token,
}: {
  access_token: string;
}): Promise<TGetQuizzesResponse> {
  const {
    group: { id },
  } = await authApi.getCurrentUser({ access_token });
  const searchParam = qs.stringify({
    populate: "*",
    filters: { id: { $eq: id } },
  });
  const { data } = await basicApi.get(`/groups?${searchParam}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
}

const getQuizById = async ({
  id,
  access_token,
}: {
  id: number;
  access_token: string;
}): Promise<any> => {
  const { data } = await basicApi.get(
    `/quizzesp?populate[map_questions][populate][option][populate]=*&filters[id]=${id}&populate[relation_questions][populate]=*&populate[map_questions][populate]=*&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return data;
};

export const quizzesApi = {
  getQuizzesByGroup,
  getQuizById,
};
