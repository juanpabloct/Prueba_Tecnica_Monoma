import { RootState } from "@/reducers/store";
import { useSelector } from "react-redux";

export const useAccesUser = () => {
  const {
    data: session,
    error,
    loading,
  } = useSelector((state: RootState) => state.accesUser);
  return { session, error, loading };
};
