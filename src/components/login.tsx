import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import FlexCol from "./styles/flexCol";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import dataLogin from "../../users.json";
import RefreshIcon from "@mui/icons-material/Refresh";
const Login = () => {
  const [showPassword, setshowPassword] = useState(true);
  const [email, setEmail] = useState({ email: "", isValid: false });
  const [password, setPassword] = useState("");
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const accesUser = () => {
    dataLogin.some((user) => {
      user.email === email.email && user.password === password;
    });
  };
  return (
    <>
      <div className="absolute top-0 right-0 ">
        <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
      </div>

      <FlexCol className="  gap-10 w-4/5 shadow-md shadow-black rounded-md">
        <LoginIcon sx={{ fontSize: "4rem" }} />
        <FlexCol className="gap-8">
          <TextField
            error={email.email.length > 0 ? !email.isValid : false}
            type={"email"}
            label={"Email"}
            onChange={({ target }) => {
              const validEmail =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              const { value } = target;
              setEmail({ email: value, isValid: validEmail.test(value) });
            }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setshowPassword((current) => !current);
                    }}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </FormControl>
        </FlexCol>
        <Button variant="outlined" color="info" className="mb-4">
          <span className="pr-2">
            <RefreshIcon className="animate-spin" />
          </span>
          Login
        </Button>
      </FlexCol>
    </>
  );
};
export default Login;
