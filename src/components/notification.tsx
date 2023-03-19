import { useAccesUser } from "@/customHook/useAccesUser";
import { setError } from "@/reducers/userAcces";
import { Alert } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const { error } = useAccesUser();
  const { error: Iserror, message, showError } = error;
  const changeError = useCallback(() => {
    dispatch(setError({ ...error, showError: false }));
  }, [dispatch, error]);
  useEffect(() => {
    setTimeout(() => {
      changeError();
    }, 5000);
  }, [changeError]);
  return (
    <div className="absolute top-0 right-0 ">
      <Alert
        severity={Iserror ? "error" : "success"}
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
