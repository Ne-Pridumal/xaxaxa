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
import { useId, useState } from "react";

export type TImageQuestion = {
  image: string;
  options: {
    image: string;
    title: string;
  }[];
  correctAnswer: string;
};

export const ImageQuestion = ({
  options,
  image,
  correctAnswer,
}: TImageQuestion) => {
  const id = useId();
  const [questions, setQuestions] = useState({
    image: image,
    correctAnswer: correctAnswer,
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
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {options.map((item) => (
              <FormControlLabel
                key={item.title}
                value={item.title}
                htmlFor={item.title}
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
                    : item.title === questions.currentAnswer
                      ? questions.currentAnswer === questions.correctAnswer
                        ? "#64CF6F14"
                        : "#E94E7C14"
                      : "transparent",
                  borderColor: !showAnswer
                    ? "#E0E0E0"
                    : item.title === questions.currentAnswer
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
                      id={item.title}
                      value={item.title}
                    />
                    {item.title}
                  </Box>
                }
                onChange={() => {
                  setActiveAnswer(item.title);
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
