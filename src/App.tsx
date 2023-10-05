import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StudentPage } from "./pages";
import { Login } from "./Components/login/Login";
import { Register } from "./Components/signUp/Register";

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
