import { CssBaseline } from "@mui/material";
import { StudentPage } from "@pages/StudentPage";
import { QuizPage } from "@pages/quiz-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
