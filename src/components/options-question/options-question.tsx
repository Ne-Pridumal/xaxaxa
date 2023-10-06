import { DragIndicator, Image } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import { Option } from "./option";
import { useState } from "react";

const taskArray = [
  {
    image: "",
    answer: "asdfasdf",
  },
  {
    image: "",
    answer: "bbbbbbbb",
  },
  {
    image: "",
    answer: "ssdfsdfsd",
  },
  {
    image: "",
    answer: "gjdskfklgj",
  },
];

type TOptions = {
  questions: {
    answer: string;
    correctAnswer: string;
    image: string;
  }[];
  answers: {
    answer: string;
  }[];
};

export const OptionsQuestion = () => {
  const [options, setOptions] = useState<TOptions>({
    questions: taskArray.map((item) => ({
      image: item.image,
      answer: "",
      correctAnswer: item.answer,
    })),
    answers: taskArray.map((item) => ({ answer: item.answer })),
  });

  const moveAnswer = (dragIndex: string, hoverIndex: string) => {
    setOptions((prevOptions) => {
      return {
        questions: prevOptions.questions.map((item) => ({
          image: item.image,
          answer: dragIndex,
          correctAnswer: item.correctAnswer,
        })),
        answers: prevOptions.answers.filter(
          (item) => item.answer !== dragIndex
        ),
      };
    });
  };

  return (
    <Box sx={{ pt: "48px" }}>
      <Typography variant="h6" mb={"20px"}>
        Выбери и соотнеси правильные комбинации «топографический знак» —
        «обозначение»
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
        }}
      >
        {options.questions.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              border: "1px solid #E0E0E0",
              borderRadius: "4px",
              padding: "12px 24px 12px 16px",
            }}
          >
            <Image sx={{ height: "64px", width: "96px" }} />
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "16px",
                  left: 0,
                  width: "100%",
                  height: "1px",
                  background: "#BABABA",
                }}
              >
                {item.answer && (
                  <Option
                    moveAnswer={moveAnswer}
                    label={item.answer}
                    id={item.answer}
                    key={item.answer}
                  />
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: "24px" }}>
        <Typography variant="h6" mb="12px">
          Варианты ответов
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {options.answers.map((item, index) => (
            <Option
              moveAnswer={moveAnswer}
              label={item.answer}
              id={item.answer}
              key={item.answer}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
