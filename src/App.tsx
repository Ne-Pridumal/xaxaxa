import { CssBaseline } from "@mui/material";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { QuizPage, StatisticPage, StudentPage } from "@/pages";
import { SnackbarProvider } from "notistack";
import { authApi } from "./api";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Login, Register } from "./components";

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
    path: "/quiz-page",
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

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </QueryClientProvider>
      <CssBaseline />
    </>
  );
}

export default App;
