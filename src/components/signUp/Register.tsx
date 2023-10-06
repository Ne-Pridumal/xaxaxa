import { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "@/api";
import { useSnackbar } from "notistack";

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const { email, password, confirmPassword } = formData;
    //  для обработки formData.email и т.д.
    if (!isValidEmail(email)) {
      enqueueSnackbar("Введите корректный email", { variant: "error" });
      return;
    }

    if (!isValidPassword(password)) {
      enqueueSnackbar("Пароль должен содержать минимум 8 символов", {
        variant: "error",
      });
      return;
    }

    if (password !== confirmPassword) {
      enqueueSnackbar("Пароли не совпадают", {
        variant: "error",
      });
      return;
    }

    try {
      const response = await authApi.registerUser({
        username: formData.email,
        email: formData.email,
        password: formData.password,
      });
      const { jwt } = response;
      localStorage.setItem("jwtToken", jwt);
      enqueueSnackbar("Успешная регистрация", { variant: "success" });
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Ошибка при авторизации", { variant: "error" });
    }
  };

  const isValidEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  const isValidPassword = (password: string) => {
    return password.length >= 8;
  };

  const buttonStyle = {
    backgroundColor: "#6B68FF",
  };

  return (
    <RegisterWrapper>
      <LeftSide>
        <LeftWrapper>
          <TopBlock>
            <Typography variant="h4" fontWeight="800">
              Регистрация
            </Typography>
            <SignUpBlock>
              <Typography variant="body2" fontSize={16} fontWeight={400}>
                Есть аккаунт?
              </Typography>
              <Typography
                variant="body2"
                fontSize={16}
                fontWeight={400}
                sx={{ textDecoration: "underline", marginLeft: "5px" }}
                component={Link}
                to={"/signin"}
              >
                Вход
              </Typography>
            </SignUpBlock>
          </TopBlock>

          <Inputs>
            <TextField
              label="Почта"
              variant="standard"
              size="medium"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Пароль"
              variant="standard"
              size="medium"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Повторите пароль"
              type={showPassword ? "text" : "password"}
              variant="standard"
              size="medium"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              size="large"
              color="primary"
              style={buttonStyle}
              onClick={handleSubmit}
            >
              Регистрация
            </Button>
          </Inputs>
          <Politika>
            <Typography variant="subtitle2" fontWeight="500" fontSize={14}>
              Регистрируясь, вы соглашаетесь с{" "}
              <Typography
                variant="body2"
                fontSize={14}
                fontWeight={500}
                color="#555555"
                sx={{ textDecoration: "underline" }}
                component={Link}
                to={"/terms"}
              >
                Условиями предоставления услуг
              </Typography>{" "}
              и{" "}
              <Typography
                variant="body2"
                fontSize={14}
                fontWeight={500}
                color="#555555"
                sx={{ textDecoration: "underline", color: "interhit" }}
                component={Link}
                to={"/politics"}
              >
                Политикой конфиденциальности
              </Typography>
            </Typography>
          </Politika>
        </LeftWrapper>
      </LeftSide>
      <RightSide>
        <ImageContainer>
          {/* <img src="/public/regPic.png" alt="" /> */}
        </ImageContainer>
      </RightSide>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  display: flex;
  width: 100%;
  height: 866px;
  justify-content: center;
`;
const LeftWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const TopBlock = styled.div`
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const SignUpBlock = styled.div`
  width: 180px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 33%;
  gap: 30px;
`;
const Politika = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const RightSide = styled.div``;
const ImageContainer = styled.div`
  width: 740px;
  height: 100vh;
  background-image: url(../public/regPic.png);
  background-size: cover;
`;
