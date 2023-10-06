import { ArrowBackIosRounded, Image } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { OptionsQuestion } from "../../components/options-question";
import { ImageQuestion } from "../../components/image-question";
import { quizzesApi } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type TImageQuestions = {
  question: string;
  rightChoice: string;
  image: string;
  options: {
    clue: string;
    title: string;
    image: string;
  }[];
}[];

type TOptionsQuestions = {
  options: {
    answer: string;
    clue: string;
    image: string;
  }[];
}[];

export const QuizPage = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-quizz"],
    queryFn: () =>
      quizzesApi.getQuizById({
        id: 1,
        access_token: window.localStorage.getItem("jwtToken")!,
      }),
  });
  if (isLoading || isError) {
    return null;
  }
  const imageQuestions: TImageQuestions =
    data!.data[0].attributes.map_questions.data.map((item: any) => ({
      question: item.attributes.question,
      rightChoice: item.attributes.rightChoice,
      image: "",
      options: item.attributes.option.map((i: any) => ({
        clue: i.clue,
        title: i.title,
        image: i.img.data.attributes.url,
      })),
    }));
  const optionsQuestions: TOptionsQuestions =
    data!.data[0].attributes.relation_questions.data.map((i: any) => ({
      options: i.attributes.option.map((item: any) => ({
        answer: item.answer,
        clue: item.clue,
        image: "",
      })),
    }));
  return (
    <Box sx={{ padding: "20px 80px 80px 80px" }}>
      <Box
        sx={{
          borderBottom: "1px solid #E0E0E0",
          py: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <IconButton onClick={() => navigate({ pathname: "/" })} color="primary">
          <ArrowBackIosRounded />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>
          {data!.data[0].attributes.title}
        </Typography>
      </Box>
      <Box sx={{ pt: "20px", pb: "40px", borderBottom: "1px solid #E0E0E0" }}>
        <Box sx={{ display: "flex", gap: "48px" }}>
          <Image />
          <Box
            sx={{
              width: "50%",
              minWidth: "630px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Typography color={"#00000099"} variant="body1">
              {data!.data[0].attributes.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <Chip
                label={`${imageQuestions.length + optionsQuestions.length
                  } заданий`}
              />
              <Chip
                label={`Успеть до ${new Date(
                  data!.data[0].attributes.finishDate
                ).toLocaleDateString()}`}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "847px",
          width: "100%",
        }}
      >
        {optionsQuestions.map((item) => {
          return <OptionsQuestion options={item.options} />;
        })}
        {imageQuestions.map((item) => {
          return (
            <ImageQuestion
              options={item.options}
              image={item.image}
              correctAnswer={item.rightChoice}
            />
          );
        })}
      </Box>
    </Box>
  );
};
