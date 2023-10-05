import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar
      component='header'
      position='sticky'
      sx={{ userSelect: 'none', bgcolor: 'white' }}
    >
      <Toolbar sx={{ px: '80px !important' }}>
        <Typography
          variant='h4'
          textTransform='uppercase'
          fontWeight={500}
          component={Link}
          to={'/'}
          sx={{ textDecoration: 'none', color: 'initial' }}
        >
          Brand
        </Typography>
        <Stack flexDirection='row' ml='auto'>
          <Button>Статистика</Button>
          <Button color='error'>Выйти</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
