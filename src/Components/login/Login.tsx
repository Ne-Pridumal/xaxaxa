import { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                sx={{ textDecoration: "underline" }}
                component={Link}
                to={"/"}
              >
                Регистрация
              </Typography>
            </SignUpBlock>
          </TopBlock>
          <Inputs>
            <TextField label="Почта" variant="standard" size="medium" />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Пароль"
              variant="standard"
              size="medium"
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
          </Inputs>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={buttonStyle}
          >
            Войти
          </Button>
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
        <img src="/public/logPic.png" alt="" />
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
  height: 20%;
  gap: 30px;
`;
const Politika = styled.div`
  text-align: center;
  margin-top: 5%
`;

const RightSide = styled.div``;

export default Login;
