import { ArrowBackIosRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

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
      <Box sx={{ pt: "20px" }}>
        <Box sx={{ display: "flex" }}></Box>
      </Box>
    </Box>
  );
};
