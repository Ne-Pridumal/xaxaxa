import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from '@mui/material';

export type TTaskCard = {
  publicationDate: string;
  finishDate: string;
  quizId: number;
  title: string;
  description: string;
  isClosed?: boolean;
};

export const TaskCard = ({
  finishDate,
  publicationDate,
  isClosed,
  description,
  title,
}: TTaskCard) => {
  const questionsDone = 0;
  const questionsCount = 12;
  const mark = questionsDone / questionsCount;
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: '413px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: mark === 1 ? theme.palette.success.main : 'transparent',
      }}
    >
      <CardMedia component='img' src='/task_placeholder.png' />
      <CardContent>
        <Typography
          color={questionsDone > 0 ? theme.palette.success.main : 'primary'}
          fontSize={14}
        >
          {!isClosed &&
            questionsDone > 0 &&
            `В процессе ${questionsDone}/${questionsCount}`}
          {(isClosed || questionsDone === 0) && `Выложен: ${publicationDate}`}
        </Typography>
        <Typography variant='h5' fontWeight={500} fontSize={20} mt='20px'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '20px' }}>
          <Chip label={`${questionsCount} заданий`} />
          {finishDate && <Chip label={`Успеть до ${finishDate}`} />}
          {isClosed && (
            <>
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
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
