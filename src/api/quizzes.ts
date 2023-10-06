import { Quiz } from "@/types";
import { basicApi } from "./basic";
import qs from "qs";
import { authApi } from ".";

async function getQuizzesByGroup({
  access_token,
}: {
  access_token: string;
}): Promise<Quiz[] | undefined> {
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
  return data.data?.at(0)?.attributes.quizzes.data;
}

export const quizzesApi = {
  getQuizzesByGroup,
};
