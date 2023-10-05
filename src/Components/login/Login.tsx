import { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate  } from "react-router-dom";
import { authApi } from "@/api";
import { useSnackbar } from "notistack";

interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate  = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    //  для обработки formData.email и т.д.
    try {
      const response = await authApi.authenticateUser({
        identifier: formData.email,
        password: formData.password,
      });
      const { jwt } = response;
      localStorage.setItem('jwtToken', jwt);
      enqueueSnackbar("Успешная авторизация", { variant: "success" });
      navigate('/');
    
    } catch (error) {
      enqueueSnackbar("Ошибка при авторизации", { variant: "error" });
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
              Вход в аккаунт
            </Typography>
            <SignUpBlock>
              <Typography variant="body2" fontSize={16} fontWeight={400}>
                Нет аккаунта?
              </Typography>
              <Typography
                variant="body2"
                fontSize={16}
                fontWeight={400}
                sx={{ textDecoration: "underline", marginLeft: "5px" }}
                component={Link}
                to={"/signup"}
              >
                Регистрация
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
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={buttonStyle}
              onClick={handleSubmit}
            >
              Войти
            </Button>
          </Inputs>
          <Politika>
            <Typography variant="subtitle2" fontWeight="500" fontSize={14}>
              <Typography
                fontSize={16}
                fontWeight={400}
                sx={{ textDecoration: "underline" }}
                component={Link}
                to={"/forget"}
              >
                Не помню пароль
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
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 23%;
  gap: 30px;
`;
const Politika = styled.div`
  text-align: center;
  margin-top: 5%;
`;

const RightSide = styled.div``;

const ImageContainer = styled.div`
  width: 740px;
  height: 100vh;
  background-image: url(../public/logPic.png);
  background-size: cover;
`;
