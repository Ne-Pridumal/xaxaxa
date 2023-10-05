import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  useTheme,
} from '@mui/material';

type Task = {
  publicationDate: string;
  deadlineDate: string;
  title: string;
  description?: string;
  questionsCount: number;
  questionsDone: number;
};

export type TTaskCard = Task;

export const TaskCard = ({
  deadlineDate,
  publicationDate,
  questionsCount,
  questionsDone,
  title,
  description,
}: TTaskCard) => {
  const mark = questionsDone / questionsCount;
  const theme = useTheme();
  return (
    <Card sx={{ width: '413px' }}>
      <CardMedia component='img' src='/task_placeholder.png' />
      <CardContent>
        <Typography
          color={questionsDone > 0 ? theme.palette.success.main : 'primary'}
          fontSize={14}
        >
          {questionsDone > 0 && (
            <>
              В процессе {questionsDone}/{questionsCount}
            </>
          )}
          {questionsDone === 0 && <>Выложен: {publicationDate}</>}
        </Typography>
        <Typography variant='h5' fontWeight={500} fontSize={20} mt='20px'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '20px' }}>
          <Chip label={`${questionsCount} заданий`} />
          <Chip label={`Успеть до ${deadlineDate}`} />
          {mark === 0 && <Chip label='Просрочено' color='error' />}
          {questionsDone / questionsCount >= 0.8 && (
            <Chip
              label={
                <>
                  Правильно: {questionsDone}/{questionsCount}
                </>
              }
              color='success'
            />
          )}
          {mark < 0.8 && mark > 0 && (
            <Chip
              label={
                <>
                  Правильно: {questionsDone}/{questionsCount}
                </>
              }
              color='warning'
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};