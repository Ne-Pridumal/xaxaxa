import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuizPage, StudentPage } from "@/pages";
import { Login, Register } from "./Components";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPage />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/quiz-page",
    element: <QuizPage />,
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
