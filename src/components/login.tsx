import {
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
import { setLoading, setData, setError } from "@/reducers/userAcces";
import { useDispatch } from "react-redux";
import { useAccesUser } from "@/customHook/useAccesUser";
import Notification from "./notification";
import ErrorIcon from "@mui/icons-material/Error";
import FlexRow from "./styles/flexRow";
const Login = () => {
  const { error, loading, session } = useAccesUser();

  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(true);
  const [email, setEmail] = useState({ email: "", isValid: false });
  const [password, setPassword] = useState("");
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const accesUser = () => {
    dispatch(setLoading());
    setTimeout(() => {
      const acces = dataLogin.find(
        (user) => user.email === email.email && user.password === password
      );
      if (acces) {
        error.error && dispatch(setError({ ...error, error: false }));
        dispatch(setData({ token: acces.token, user: acces.token }));
      } else {
        dispatch(
          setError({ error: true, message: "User Invalid", showError: true })
        );
      }
    }, 3000);
  };
  return (
    <>
      {error.showError && <Notification />}
      <FlexCol className="  gap-10 w-4/5 shadow-md shadow-black rounded-md">
        <LoginIcon sx={{ fontSize: "4rem" }} />
        {error.error && (
          <FlexRow>
            <ErrorIcon color={"error"} />
            <p className="text-red-500">Error Session</p>
          </FlexRow>
        )}
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
        <Button
          variant="outlined"
          color="info"
          className="mb-4"
          onClick={() => accesUser()}
          disabled={!(email.isValid && password.length > 0)}
        >
          {loading && (
            <span className="pr-2">
              <RefreshIcon className="animate-spin" />
            </span>
          )}
          Login
        </Button>
      </FlexCol>
    </>
  );
};
export default Login;
