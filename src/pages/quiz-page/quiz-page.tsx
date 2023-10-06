import { ArrowBackIosRounded, Image } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { OptionsQuestion } from "../../components/options-question";
import { ImageQuestion } from "../../components/image-question";

export const QuizPage = () => {
  return (
    <Box sx={{ padding: "20px 80px 0 80px" }}>
      <Box
        sx={{
          borderBottom: "1px solid #E0E0E0",
          py: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <IconButton color="primary">
          <ArrowBackIosRounded />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>
          Задание #1
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
              Не следует, однако, забывать, что убеждённость некоторых
              оппонентов позволяет оценить. Высокий уровень вовлечения
              представителей целевой аудитории является четким доказательством
              простого факта: консультация с широким активом влечет за собой
              процесс внедрения и модернизации стандартных подходов.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <Chip label="12 заданий" /> <Chip label="Успеть до 12 октября" />
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
        <OptionsQuestion />
        <ImageQuestion />
      </Box>
    </Box>
  );
};
