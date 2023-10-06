import { Image } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { Box } from "@mui/material";
import { FormEvent, useId, useState } from "react";

const imageQuestion = {
  image: "",
  options: [
    { image: "", answer: "a" },
    { image: "", answer: "b" },
    { image: "", answer: "c" },
    { image: "", answer: "d" },
  ],
  correctAnswer: "b",
};

export type TMapQuestion = {};

export const ImageQuestion = () => {
  const id = useId();
  const [questions, setQuestions] = useState({
    image: imageQuestion.image,
    correctAnswer: imageQuestion.correctAnswer,
    currentAnswer: "",
  });
  const [activeAnswer, setActiveAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const checkAnswer = () => {
    setShowAnswer(true);
    setQuestions((prev) => ({ ...prev, currentAnswer: activeAnswer }));
  };
  return (
    <Box sx={{ pt: "48px" }}>
      <Typography variant="h6" mb={"20px"}>
        Напиши правильные названия топографических знаков
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          height: "412px",
        }}
      >
        <Image
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: "630px",
          }}
        />
        <FormControl sx={{ height: "100%" }} id={id}>
          <RadioGroup
            defaultValue={imageQuestion.options[0].answer}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {imageQuestion.options.map((item) => (
              <FormControlLabel
                value={item.answer}
                htmlFor={item.answer}
                aria-labelledby="image-answer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  border: "1px solid ",
                  borderRadius: "4px",
                  padding: "12px 24px 12px 16px",
                  background: !showAnswer
                    ? "transparent"
                    : item.answer === questions.currentAnswer
                      ? questions.currentAnswer === questions.correctAnswer
                        ? "#64CF6F14"
                        : "#E94E7C14"
                      : "transparent",
                  borderColor: !showAnswer
                    ? "#E0E0E0"
                    : item.answer === questions.currentAnswer
                      ? questions.currentAnswer === questions.correctAnswer
                        ? "#1EAA2C"
                        : "#D6295D"
                      : "#E0E0E0",

                  margin: 0,
                }}
                labelPlacement="start"
                label={<Image sx={{ width: "96px", height: "64px" }} />}
                control={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Radio
                      disabled={
                        questions.currentAnswer === questions.correctAnswer
                      }
                      id={item.answer}
                      value={item.answer}
                    />{" "}
                    {item.answer}
                  </Box>
                }
                onChange={() => {
                  setActiveAnswer(item.answer);
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        sx={{ mt: "32px" }}
        size="large"
        onClick={checkAnswer}
      >
        Проверить ответы
      </Button>
    </Box>
  );
};
