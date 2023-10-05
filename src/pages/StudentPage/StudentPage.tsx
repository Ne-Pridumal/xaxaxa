import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Header, TTaskCard, TaskCard } from '../../Components';

function getTasks(): TTaskCard[] {
  const date = new Date();
  const questionsCount = 12;
  const questionsDone = 0;
  return [
    {
      deadlineDate: date.toISOString(),
      publicationDate: date.toISOString(),
      title: 'Задание #1',
      questionsCount,
      questionsDone: 12,
    },
    {
      deadlineDate: date.toISOString(),
      publicationDate: date.toISOString(),
      title: 'Задание #2',
      description:
        'Не следует, однако, забывать, что убеждённость некоторых оппонентов позволяет оценить.',
      questionsCount,
      questionsDone,
    },
  ];
}

export const StudentPage = () => {
  const tasks = useMemo(() => getTasks(), []);
  return (
    <>
      <Header />
      <Box sx={{ px: '80px', mt: '20px', pt: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Typography variant='h5' fontWeight={600}>
            Мои задания
          </Typography>
        </Box>
        <Box sx={{ my: '20px' }}>
          <Tabs value={0} onChange={console.log}>
            <Tab label='Открытые' />
            <Tab label='Завершенные' />
          </Tabs>
        </Box>
        <Box sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
          {tasks.map(task => {
            return <TaskCard {...task} />;
          })}
        </Box>
      </Box>
    </>
  );
};
