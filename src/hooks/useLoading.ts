import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useLoading = () => {
  const { isLoading: userLoading } = useSelector(
    (state: RootState) => state.userReducer
  );

  return userLoading;
};

export default useLoading;
