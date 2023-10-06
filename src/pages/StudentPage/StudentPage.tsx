import { quizzesApi } from "@/api";
import { Header, TaskCard } from "@/components";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export const StudentPage = () => {
  const access_token = useMemo(
    () => localStorage.getItem("jwtToken"),
    []
  ) as string;
  const date = new Date();
  const { data: quizzes, isLoading: quizzesLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => quizzesApi.getQuizzesByGroup({ access_token }),
  });

  const [taskType, setTaskType] = useState<"open" | "completed">("open");
  if (quizzesLoading) {
    return <div>loading</div>;
  }
  console.log(quizzes);
  return (
    <>
      <Header />
      <Box sx={{ px: "80px", mt: "20px", pt: "20px" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Мои задания
          </Typography>
        </Box>
        <Box sx={{ my: "20px" }}>
          <Tabs value={taskType} onChange={(_, newVal) => setTaskType(newVal)}>
            <Tab label="Открытые" value="open" />
            <Tab label="Завершенные" value="completed" />
          </Tabs>
        </Box>
        <Box sx={{ mt: "20px", display: "flex", gap: "20px" }}>
          {quizzes?.data
            ?.filter((quizz) => {
              const isClosed =
                quizz.attributes.finishDate &&
                new Date(quizz.attributes.finishDate) < date;
              const isOpened =
                !quizz.attributes.finishDate ||
                new Date(quizz.attributes.finishDate) > date;
              if (isOpened && taskType === "open") return true;
              if (isClosed && taskType === "completed") return true;
              return false;
            })
            .map((quizz) => {
              return (
                <TaskCard
                  key={quizz.id}
                  finishDate={quizz.attributes.finishDate}
                  publicationDate={new Date(
                    quizz.attributes.publishedAt
                  ).toLocaleString()}
                  title={quizz.attributes.title}
                  description={quizz.attributes.description}
                  quizId={quizz.id}
                />
              );
            })}
        </Box>
      </Box>
    </>
  );
};
