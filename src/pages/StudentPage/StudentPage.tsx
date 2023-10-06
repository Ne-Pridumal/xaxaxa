import { authApi, quizzesApi } from '@/api';
import { Header, TaskCard } from '@/components';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const StudentPage = () => {
  const navigate = useNavigate();
  const access_token = useMemo(
    () => localStorage.getItem('jwtToken'),
    [],
  ) as string;
  const { data: userData } = useQuery({
    queryKey: ['auth'],
    queryFn: () => authApi.getCurrentUser({ access_token }),
  });
  useEffect(() => {
    if (!userData) {
      navigate('/signin');
    }
  }, [userData, navigate]);
  const date = new Date();
  const { data: quizzes } = useQuery({
    queryKey: ['quizzes', userData?.id],
    queryFn: () =>
      quizzesApi.getQuizzesByGroup({ id: userData?.group.id, access_token }),
  });

  const [taskType, setTaskType] = useState<'open' | 'completed'>('open');

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
          <Tabs value={taskType} onChange={(_, newVal) => setTaskType(newVal)}>
            <Tab label='Открытые' value='open' />
            <Tab label='Завершенные' value='completed' />
          </Tabs>
        </Box>
        <Box sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
          {quizzes
            ?.filter(quizz => {
              const isClosed =
                quizz.attributes.finishDate &&
                new Date(quizz.attributes.finishDate) < date;
              const isOpened =
                !quizz.attributes.finishDate ||
                new Date(quizz.attributes.finishDate) > date;
              if (isOpened && taskType === 'open') return true;
              if (isClosed && taskType === 'completed') return true;
              return false;
            })
            .map(quizz => {
              return (
                <TaskCard
                  key={quizz.id}
                  finishDate={quizz.attributes.finishDate}
                  publicationDate={quizz.attributes.publishedAt}
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
