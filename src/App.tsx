import { CssBaseline } from "@mui/material";
import Register from "./Components/signUp/Register"; // Import your registration component
import Login from "./Components/login/Login"; // Import your login component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </>
  );
}

export default App;
