import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";

export type TTaskCard = {
  publicationDate: string;
  deadlineDate: string;
  taskId: number;
  title: string;
  description: string;
  onClick: () => void;
};

// const get_

export const TaskCard = ({
  deadlineDate,
  publicationDate,
  taskId,
  description,
  title,
  onClick,
}: TTaskCard) => {
  // const {} = useQuery({ queryKey: ['quiz', taskId], queryFn: () => {} });

  const questionsDone = Math.floor(Math.random() * 6);
  const questionsCount = 12;
  const mark = questionsDone / questionsCount;
  const isCompleted = false;
  const theme = useTheme();
  return (
    <Card
      onClick={onClick}
      sx={{
        width: "413px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: mark === 1 ? theme.palette.success.main : "transparent",
      }}
    >
      <CardMedia component="img" src="/task_placeholder.png" />
      <CardContent>
        <Typography
          color={questionsDone > 0 ? theme.palette.success.main : "primary"}
          fontSize={14}
        >
          {!isCompleted && questionsDone > 0 && (
            <>
              В процессе {questionsDone}/{questionsCount}
            </>
          )}
          {(isCompleted || questionsDone === 0) && (
            <>Выложен: {publicationDate}</>
          )}
        </Typography>
        <Typography variant="h5" fontWeight={500} fontSize={20} mt="20px">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: "20px" }}>
          <Chip label={`${questionsCount} заданий`} />
          <Chip label={`Успеть до ${deadlineDate}`} />
          {isCompleted && (
            <>
              {mark === 0 && <Chip label="Просрочено" color="error" />}
              {questionsDone / questionsCount >= 0.8 && (
                <Chip
                  label={
                    <>
                      Правильно: {questionsDone}/{questionsCount}
                    </>
                  }
                  color="success"
                />
              )}
              {mark < 0.8 && mark > 0 && (
                <Chip
                  label={
                    <>
                      Правильно: {questionsDone}/{questionsCount}
                    </>
                  }
                  color="warning"
                />
              )}
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
