import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar component='header' position='sticky' sx={{ userSelect: 'none' }}>
      <Toolbar sx={{ px: '80px !important' }}>
        <Typography
          variant='h4'
          textTransform='uppercase'
          fontWeight={500}
          component={Link}
          to={'/'}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Brand
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
