import { CssBaseline } from '@mui/material';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { QuizPage, StudentPage } from '@/pages';
import { SnackbarProvider } from 'notistack';
import { authApi } from './api';
import { Login, Register } from '@/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StudentPage />,
    async loader() {
      const access_token = localStorage.getItem('jwtToken');
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return {};
        }
      }
      return redirect('/signin');
    }, // jwt exists && jwt valid => pass
  },
  {
    path: '/signin',
    element: <Login />,
    async loader() {
      const access_token = localStorage.getItem('jwtToken');
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return redirect('/');
        }
      }
      return {};
    }, // jwt !exists || jwt !valid => pass
  },
  {
    path: '/signup',
    element: <Register />,
    async loader() {
      const access_token = localStorage.getItem('jwtToken');
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return redirect('/');
        }
      }
      return {};
    }, // jwt !exists || jwt !valid => pass
  },
  {
    path: '/quiz-page',
    element: <QuizPage />,
    async loader() {
      const access_token = localStorage.getItem('jwtToken');
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return {};
        }
      }
      return redirect('/signin');
    }, // jwt exists && jwt valid => pass
  },
]);

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
        <CssBaseline />
      </SnackbarProvider>
    </>
  );
}

export default App;
