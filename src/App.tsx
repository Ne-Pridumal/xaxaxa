import { QuizPage, StatisticPage, StudentPage } from "@/pages";
import { CssBaseline } from "@mui/material";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { authApi } from "./api";
import { Login } from "./components";
import { Register } from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentPage />,
    async loader() {
      const access_token = localStorage.getItem("jwtToken");
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return null;
        }
      }
      return redirect("/signin");
    }, // jwt exists && jwt valid => pass
  },
  {
    path: "/signin",
    element: <Login />,
    async loader() {
      const access_token = localStorage.getItem("jwtToken");
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return redirect("/");
        }
      }
      return null;
    }, // jwt !exists || jwt !valid => pass
  },
  {
    path: "/signup",
    element: <Register />,
    async loader() {
      const access_token = localStorage.getItem("jwtToken");
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return redirect("/");
        }
      }
      return null;
    }, // jwt !exists || jwt !valid => pass
  },
  {
    path: "/quiz/:id",
    element: <QuizPage />,
    async loader() {
      const access_token = localStorage.getItem("jwtToken");
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return null;
        }
      }
      return redirect("/signin");
    }, // jwt exists && jwt valid => pass
  },
  {
    path: "/statistic-page",
    element: <StatisticPage />,
    async loader() {
      const access_token = localStorage.getItem("jwtToken");
      if (access_token) {
        const currentUser = await authApi
          .getCurrentUser({ access_token })
          .catch(() => null);
        if (currentUser) {
          return null;
        }
      }
      return redirect("/signin");
    }, // jwt exists && jwt valid => pass
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
