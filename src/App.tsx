import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QuizPage, StudentPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPage />,
  },
  {
    path: "/quiz-page",
    element: <QuizPage />,
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
