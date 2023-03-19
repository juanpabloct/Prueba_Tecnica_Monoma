import { useAccesUser } from "@/customHook/useAccesUser";
import { setError } from "@/reducers/userAcces";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const { error } = useAccesUser();
  const { error: Iserror, message, showError } = error;
  const changeError = () => {
    dispatch(setError({ ...error, showError: false }));
  };
  useEffect(() => {
    setTimeout(() => {
      changeError();
    }, 5000);
  }, []);
  return (
    <div className="absolute top-0 right-0 ">
      <Alert
        severity={error ? "error" : "success"}
        onClose={() => {
          changeError();
        }}
      >
        {message}
      </Alert>
    </div>
  );
};
export default Notification;
