import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Image } from "@mui/icons-material";

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

type TOptionsQuestion = {
  options: {
    image: string;
    answer: string;
    clue: string;
  }[];
};

type TQuestion = {
  answer: string;
  correctAnswer: string;
  currentAnswer: string;
};

export const OptionsQuestion = ({ options }: TOptionsQuestion) => {
  const [questions, setQuestions] = useState<TQuestion[]>(
    options.map((item) => ({
      image: item.image,
      answer: "",
      correctAnswer: item.answer,
      currentAnswer: "",
    }))
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const setAnswer = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: string
  ) => {
    setQuestions((prevValue) =>
      prevValue.map((item) => {
        if (item.correctAnswer === index) {
          return {
            ...item,
            currentAnswer: e.target.value,
          };
        }
        return item;
      })
    );
  };

  const checkAnswers = () => {
    setQuestions((prev) =>
      prev.map((item) => ({
        ...item,
        answer: item.currentAnswer,
      }))
    );
    setShowAnswer(true);
  };

  return (
    <Box sx={{ pt: "48px" }}>
      <Typography variant="h6" mb={"20px"}>
        Напиши правильные названия топографических знаков
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
        }}
      >
        {questions.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              border: "1px solid ",
              borderRadius: "4px",
              padding: "12px 24px 12px 16px",
              background: !showAnswer
                ? "transparent"
                : item.correctAnswer === item.answer
                  ? "#64CF6F14"
                  : "#E94E7C14",
              borderColor: !showAnswer
                ? "#E0E0E0"
                : item.correctAnswer === item.answer
                  ? "#1EAA2C"
                  : "#D6295D",
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
              <TextField
                id="sdf"
                label="Ответ"
                variant="standard"
                onChange={(e) => setAnswer(e, item.correctAnswer)}
                sx={{
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                disabled={item.answer === item.correctAnswer}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        color="primary"
        variant="contained"
        type="button"
        onClick={checkAnswers}
        sx={{ mt: "32px" }}
        size="large"
      >
        Проверить ответы
      </Button>
    </Box>
  );
};
