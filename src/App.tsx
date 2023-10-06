import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuizPage, StudentPage } from "@/pages";

import { SnackbarProvider } from "notistack";
import { Login, Register } from './Components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPage />,
    async loader() {}, // jwt exists && jwt valid => pass
  },
  {
    path: "/signin",
    element: <Login />,
    async loader() {}, // jwt !exists  jwt !valid => pass
  },
  {
    path: "/signup",
    element: <Register />,
    async loader() {}, // jwt !exists  jwt !valid => pass
  },
  {
    path: "/quiz-page",
    element: <QuizPage />,
    async loader() {
      // jwt exists && jwt valid => pass
    },
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
