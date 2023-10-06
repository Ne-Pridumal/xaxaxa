import { Header } from "@/components";
import { ArrowBackIosRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { CatSVG } from "@/icons/Cat";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function createData(task: string, date: Date, score: string) {
  return { task, date, score };
}

const rows = [
  createData("Задание1", new Date("2023-10-04"), "12 / 12"),
  createData("Задание2", new Date("2023-10-04"), "30 / 36"),
  createData("Задание3", new Date("2023-10-04"), "12 / 12"),
  createData("Задание4", new Date("2023-10-04"), "12 / 12"),
  createData("Задание5", new Date("2023-10-04"), "12 / 12"),
];

export const StatisticPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
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
          <IconButton
            onClick={() => navigate({ pathname: "/" })}
            color="primary"
          >
            <ArrowBackIosRounded />
          </IconButton>
          <Typography variant="h6" fontWeight={600}>
            Моя статистика
          </Typography>
        </Box>
        <Box sx={{ pt: "20px" }}>
          <Box sx={{ display: "flex" }}></Box>
        </Box>
      </Box>
      <Box sx={{ px: "80px", mt: "20px", pt: "20px", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%", // Take up 50% of the width
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "525px",
              height: "200px",
              backgroundColor: "#E4F2FE",
              borderRadius: "12px",
              flexDirection: "column",
              zIndex: "-1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: "16px",
                px: "20px",
              }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                color="#2196F3"
                fontSize="80px"
              >
                3
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Мой уровень
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  color="rgba(0, 0, 0, 0.6)"
                >
                  Выполняй задания вовремя, чтобы повысить свой уровень!
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    right: "-106%",
                    top: "-58%",
                  }}
                >
                  <CatSVG />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "50%", // Take up 50% of the width
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              pr: "200px",
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              color="#2196F3"
              fontSize="80px"
            >
              8
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Тестов пройдено
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              pr: "200px",
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              color="#2196F3"
              fontSize="80px"
            >
              93
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Правильных ответов
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "80px 80px 0 80px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                  Задание
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                  Дата прохождения
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                  Оценка&nbsp;/&nbsp;Баллы
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.task}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.task}
                  </TableCell>
                  <TableCell align="right">
                    {format(row.date, "dd.MM.yyyy")}
                  </TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
