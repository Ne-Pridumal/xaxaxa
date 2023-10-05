import { CssBaseline } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StudentPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StudentPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CssBaseline />
    </>
  );
}

export default App;
